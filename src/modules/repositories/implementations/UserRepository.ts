import { User } from '../../model/User';
import { IUserRepositoryDTO, IUserRepository } from '../IUserRepository';

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

	create({ name, email, password }: IUserRepositoryDTO) {
		const user = new User();

		Object.assign(user, {
			name,
			email,
			password,
		});

		return this.users.push(user);
	}

	list(): User[] {
		return this.users;
	}

	findByEmail(email: string): User {
		return this.users.find(user => user.email === email);
	}
}

export { UserRepository };
