import { BookRepository } from '../../repositories/implementations/BookRepository';
import { ListBooksController } from './ListBooksController';
import { ListBooksUseCase } from './ListBooksUseCase';

const bookRepository = BookRepository.getInstance();

const listBooksUseCase = new ListBooksUseCase(bookRepository);

const listBooksController = new ListBooksController(listBooksUseCase);

export { listBooksController };
