import { Request, Response } from "express";
import { client } from "@repo/db/client";
import hassPass from '../../utils/bcryptUtils'
import jwt from 'jsonwebtoken'

export const signupController = async (req: Request, res: Response):Promise<any> => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.json({
            success: false,
            message: "Fill all the fields Correctly"
        })
    }

    try {
        const findUser = await client.user.findUnique({
            where: {
                email: email
            }
        });
        if (findUser) {
            return res.json({
                success: false,
                message: "User Already Exists You Need to Log In"
            })
        };
        const createHashPassword = await hassPass.createHashPassword(password);
        const createUser = await client.user.create({
            data: { name: name, email: email, password: createHashPassword }
        })
        const responceData = {
            id: createUser.id,
            name: createUser.name,
            email: createUser.email,
            subscription: createUser.subscription
        }
        const userToken = jwt.sign(responceData, process.env.JWT_SEC as string);
        return res.json({
            success: "true",
            message: "Sign Up Successfully",
            data: responceData,
            token: userToken
        })
    } catch (err) {
        return res.json({
            success: false,
            message: (err as Error).message
        })
    }
}