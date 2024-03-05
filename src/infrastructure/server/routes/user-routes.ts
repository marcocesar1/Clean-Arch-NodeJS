import express from "express";

import { UserController } from "../controllers";
import { createUserUseCase, getUsersUseCase } from "../../service-container";

const userRouter = express.Router();
const userController = new UserController();

userRouter.get("/", userController.getUsers(getUsersUseCase));
userRouter.post("/", userController.createUser(createUserUseCase));

export default userRouter;
