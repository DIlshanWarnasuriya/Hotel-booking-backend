import express from "express";
import { login, save } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/", save);

userRouter.post("/login", login);

export default userRouter;