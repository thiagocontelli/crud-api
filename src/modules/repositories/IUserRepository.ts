import { User } from '../model/User';

interface IUserRepositoryDTO {
	name: string;
	email: string;
	password: string;
}

interface IUserRepository {
	create({ name, email, password }: IUserRepositoryDTO): void;
	findByEmail(email: string): User;
	findById(id: string): User;
	list(): User[];
	encrypt(password: string): Promise<string>;
	update({ name, email, password, id }: User): Promise<void>;
}

export { IUserRepository, IUserRepositoryDTO };
