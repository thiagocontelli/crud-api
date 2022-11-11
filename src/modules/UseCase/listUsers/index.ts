import { UserRepository } from '../../repositories/implementations/UserRepository';
import { ListUsersController } from './ListUsersController';
import { ListUsersUseCase } from './ListUsersUseCase';

const userRepository = UserRepository.getInstance();

const listUsersUseCase = new ListUsersUseCase(userRepository);

const listUsersController = new ListUsersController(listUsersUseCase);

export { listUsersController };
