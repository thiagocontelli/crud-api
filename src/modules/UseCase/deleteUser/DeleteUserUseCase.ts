import { IUserRepository } from '../../repositories/IUserRepository';

class DeleteUserUseCase {
	constructor(private userRepository: IUserRepository) {}

	execute(id: string) {
		const user = this.userRepository.findById(id);

		if (!user) throw new Error('User not found!');

		this.userRepository.delete(id);
	}
}

export { DeleteUserUseCase };
