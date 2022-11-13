import { BookRepository } from '../../repositories/implementations/BookRepository';
import { UpdateBookController } from './UpdateBookController';
import { UpdateBookUseCase } from './UpdateBookUseCase';

const bookRepository = BookRepository.getInstance();

const updateBookUseCase = new UpdateBookUseCase(bookRepository);

const updateBookController = new UpdateBookController(updateBookUseCase);

export { updateBookController };
