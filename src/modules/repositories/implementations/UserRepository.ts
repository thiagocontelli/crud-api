import { User } from '../../model/User';
import { IUserRepositoryDTO, IUserRepository } from '../IUserRepository';

class UserRepository implements IUserRepository {
	users: User[];

	constructor() {
		this.users = [];
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

	findByEmail(email: string): User {
		return this.users.find(user => user.email === email);
	}
}

export { UserRepository };