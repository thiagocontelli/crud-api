import { User } from "../model/User";

interface IUserRepositoryDTO {
	name: string;
	email: string;
	password: string;
}

interface IUserRepository {
	create({ name, email, password }): void;
  findByEmail(email: string): User;
}

export { IUserRepository, IUserRepositoryDTO };
