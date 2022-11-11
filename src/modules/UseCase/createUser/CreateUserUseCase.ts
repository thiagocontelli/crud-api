import { IUserRepository } from '../../repositories/IUserRepository';

interface IRequest {
	name: string;
	email: string;
	password: string;
}

class UserUseCase {
	constructor(private userRepository: IUserRepository) {}

	execute({ name, email, password }: IRequest): void {
		const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

		const passwordRegex =
			/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

		const userAlreadyExists = this.userRepository.findByEmail(email);

		if (!emailRegex.test(email)) {
			throw new Error('E-mail address is invalid!');
		}

		if (!passwordRegex.test(password)) {
			throw new Error(
				'Password invalid! Must contain at least: one upper case letter, one lowercase letter, one number, one special character, eight characters'
			);
		}

		if (userAlreadyExists) {
			throw new Error('This e-mail already exists!');
		}

		this.userRepository.create({ name, email, password });
	}
}

export { UserUseCase };
