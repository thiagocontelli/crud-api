import { BookRepository } from '../../repositories/implementations/BookRepository';
import { CreateBookController } from './CreateBookController';
import { CreateBookUseCase } from './CreateBookUseCase';

const bookRepository = BookRepository.getInstance();

const createBookUseCase = new CreateBookUseCase(bookRepository);

const createBookController = new CreateBookController(createBookUseCase);

export { createBookController };
