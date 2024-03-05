import { UserRepository } from "../../../domain/repositories";

export class GetUsersUseCase {
  repo: UserRepository;

  constructor(userRepo: UserRepository) {
    this.repo = userRepo;
  }

  public execute() {
    return this.repo.all();
  }
}
