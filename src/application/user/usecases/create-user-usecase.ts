import { User } from "../../../domain/models";
import { CreateUserDTO } from "../../../domain/dtos";
import { UserRepository } from "../../../domain/repositories";

export class CreateUserUseCase {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(user: CreateUserDTO): Promise<User> {
    const newUser = this.createUserModel(user);

    const emailFound = await this.userRepo.findByEmail(newUser.email);
    if (emailFound) {
      throw new Error("Email already exist");
    }

    return this.storeUser(newUser);
  }

  private createUserModel(user: CreateUserDTO): User {
    if (!user.name) throw new Error("Name field is required");
    if (!user.email) throw new Error("Email field is required");

    const newUser = new User();
    newUser.name = user.name;
    newUser.email = user.email;

    return newUser;
  }

  private storeUser(user: User): Promise<User> {
    return this.userRepo.create(user);
  }
}
