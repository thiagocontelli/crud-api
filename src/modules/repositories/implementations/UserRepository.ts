import { User } from '../../model/User';
import { IUserRepositoryDTO, IUserRepository } from '../IUserRepository';
import bcrypt from 'bcrypt';

class UserRepository implements IUserRepository {
	private users: User[];

	private static INSTANCE: UserRepository;

	private constructor() {
		this.users = [];
	}

	public static getInstance(): UserRepository {
		if (!UserRepository.INSTANCE) {
			UserRepository.INSTANCE = new UserRepository();
		}

		return UserRepository.INSTANCE;
	}

	async create({ name, email, password }: IUserRepositoryDTO) {
		try {
			const user = new User();

			const hashedPassword = await this.encrypt(password);

			Object.assign(user, {
				name,
				email,
				password: hashedPassword,
			});

			return this.users.push(user);
		} catch (error) {
			throw new Error(error);
		}
	}

	list(): User[] {
		return this.users;
	}

	async update({ id, name, email, password }: User): Promise<void> {
		const user = this.users.find(user => user.id === id);

		const hashedPassword = password !== '' && (await this.encrypt(password));

		Object.assign(user, {
			name: name !== '' ? name : user.name,
			email: email !== '' ? email : user.email,
			password: password !== '' ? hashedPassword : user.password,
		});
	}

	async encrypt(password: string): Promise<string> {
		const hashedPassword = await bcrypt.hash(password, 10);

		return hashedPassword;
	}

	findByEmail(email: string): User {
		return this.users.find(user => user.email === email);
	}

	findById(id: string): User {
		return this.users.find(user => user.id === id);
	}
}

export { UserRepository };
