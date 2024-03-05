import { Request, Response } from "express";
import { CreateUserDTO } from "../../../domain/dtos";
import {
  CreateUserUseCase,
  GetUsersUseCase,
} from "../../../application/user/usecases";

export class UserController {
  createUser(usecase: CreateUserUseCase) {
    return async (req: Request, resp: Response) => {
      const userDto = req.body as CreateUserDTO;
      try {
        const user = await usecase.execute(userDto);

        resp.status(200).json({ user });
      } catch (err) {
        if (err instanceof Error) {
          resp.status(400).json({ error: err.message });
        } else {
          resp.status(500).json({ message: "Unknown error" });
        }
      }
    };
  }

  getUsers(usecase: GetUsersUseCase) {
    return async (req: Request, resp: Response) => {
      try {
        const users = await usecase.execute();

        resp.status(200).json({ users });
      } catch (err) {
        if (err instanceof Error) {
          resp.status(400).json({ error: err.message });
        } else {
          resp.status(500).json({ message: "Unknown error" });
        }
      }
    };
  }
}
