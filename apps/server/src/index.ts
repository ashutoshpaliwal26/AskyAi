import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import { GoogleGenerativeAI } from '@google/generative-ai';

import AuthRouter from './router/auth';

dotenv.config()

const app = express();
const PORT = parseInt(process.env.PORT as string);
const genAI = new GoogleGenerativeAI(process.env.KEY as string);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.use(express.json());
app.use(cors());


app.post("/api/ai", async(req:Request, res:Response):Promise<any> => {
    const {prompt} = req.body;
    console.log({prompt})
    
    if(!prompt){
        return res.json({
            success : false,
            message : "Write Prompt"
        });
    }
    const result = await model.generateContent(prompt);
    console.log("Generated Data is : " , result.response.text());
    return res.json({
            success : true,
        data : result.response.text()
    })
    
    // return res.json({successs : true})
    
});
app.use("/api", AuthRouter);

app.listen(PORT as number, ()=> console.log("Server is Running on PORT : ", PORT));

