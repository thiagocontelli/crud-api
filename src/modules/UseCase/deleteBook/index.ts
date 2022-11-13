import { BookRepository } from '../../repositories/implementations/BookRepository';
import { DeleteBookController } from './DeleteBookController';
import { DeleteBookUseCase } from './DeleteBookUseCase';

const bookRepository = BookRepository.getInstance();

const deleteBookUseCase = new DeleteBookUseCase(bookRepository);

const deleteBookController = new DeleteBookController(deleteBookUseCase);

export { deleteBookController };
