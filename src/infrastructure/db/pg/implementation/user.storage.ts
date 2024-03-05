import { DataSource, Repository, getRepository } from "typeorm";
import { inject, injectable } from "tsyringe";

import { User } from "../../../../domain/models";
import { UserRepository } from "../../../../domain/repositories";

@injectable()
export class PgUser implements UserRepository {
  private repo: Repository<User>;

  constructor(dataSource: DataSource) {
    this.repo = dataSource.getRepository(User);
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.repo.findOneBy({ email });

    return user;
  }

  all(): Promise<User[]> {
    return this.repo.find();
  }

  async create(user: User): Promise<User> {
    return user.save();
  }

  update(user: User): Promise<User> {
    this.repo.update(user.id, { ...user });

    return this.repo.findOneByOrFail({
      id: user.id,
    });
  }

  async delete(id: number): Promise<string> {
    this.repo.delete({ id });

    return "User deleted";
  }
}
