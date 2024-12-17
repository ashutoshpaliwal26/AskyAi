
import { client } from "@repo/db/client";
import hassPass from '../../utils/bcryptUtils'
import jwt from 'jsonwebtoken'
import { Request, Response } from "express";

export const loginController = async (req: Request, res: Response):Promise<any> => {
    const { email, password } = req.body;
    if (!email || !password) {
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
        if (!findUser) {
            return res.json({
                success: false,
                message: "You Need To Create Account."
            })
        };
        const checkUserPass = await hassPass.checkPassword(findUser?.password as string, password);
        if(!checkUserPass){
            return res.json({
                success : false,
                message : "Incorrect Password"
            })
        }
        const responceData = {
            id: findUser.id,
            name: findUser.name,
            email: findUser.email,
            subscription: findUser.subscription
        }
        const userToken = jwt.sign(responceData, process.env.JWT_SEC as string);
        return res.json({
            success: true,
            message: "Login Successfully",
            data : responceData,
            token : userToken
        })
    } catch (err) {
        return res.json({
            success: false,
            message: (err as Error).message
        })
    }
}