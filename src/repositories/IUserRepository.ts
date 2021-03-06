import User from '../models/User';
import { CreateUserDTO } from '../dtos/CreateuserDTO';

export interface IUserRepository {
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
  create(createUserDTO: CreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
}
