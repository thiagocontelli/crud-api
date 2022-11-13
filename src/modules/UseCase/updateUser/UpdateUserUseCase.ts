import { User } from '../../model/User';
import { IUserRepository } from '../../repositories/IUserRepository';

class UpdateUserUseCase {
	constructor(private userRepository: IUserRepository) {}

	execute({ email, name, password, id }: User) {
		const user = this.userRepository.findById(id);

		const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

		const passwordRegex =
			/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

		if (!user) throw new Error('User not found!');

		if (email !== '' && !emailRegex.test(email))
			throw new Error('E-mail address is invalid!');

		if (password !== '' && !passwordRegex.test(password))
			throw new Error(
				'Password invalid! Must contain at least: one upper case letter, one lowercase letter, one number, one special character, eight characters'
			);

		this.userRepository.update({ email, name, password, id });
	}
}

export { UpdateUserUseCase };
