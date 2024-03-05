import dataSource from "../../configs/database";

import { PgUser } from "../db/pg/implementation/user.storage";
import {
  CreateUserUseCase,
  GetUsersUseCase,
} from "../../application/user/usecases";

const userRepo = new PgUser(dataSource);

const createUserUseCase = new CreateUserUseCase(userRepo);
const getUsersUseCase = new GetUsersUseCase(userRepo);

export { createUserUseCase, getUsersUseCase };
