import express from 'express'
import { signupController } from '../controller/Authentication/signup'; 
import { loginController } from '../controller/Authentication/login';

const AuthRouter = express.Router();

AuthRouter.route("/signup").post(signupController);
AuthRouter.route("/login").post(loginController);

export default AuthRouter;