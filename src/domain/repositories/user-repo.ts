import { User } from "../models";

export interface UserRepository {
  findByEmail(email: string): Promise<User | null>;
  create(user: User): Promise<User>;
  update(user: User): Promise<User>;
  all(): Promise<User[]>;
  delete(id: number): Promise<string>;
}
