import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv'

dotenv.config

//Access your API key as an environment variable
const genAI = new GoogleGenerativeAI("AIzaSyAnW_2Pj-k3vjIs4VToy9-nC5ZZ7DPbKvo");

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "What is NLP";

async function getRes() {
    const result = await model.generateContent(prompt);
    console.log("Generated Data is : " , result.response.text());
}

console.log("Hell world");
