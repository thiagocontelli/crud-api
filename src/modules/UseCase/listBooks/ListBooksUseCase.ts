import { Book } from '../../model/Book';
import { IBookRepository } from '../../repositories/IBookRepository';

class ListBooksUseCase {
	constructor(private bookRepository: IBookRepository) {}

	execute(): Book[] {
		const books = this.bookRepository.list();

		return books;
	}
}

export { ListBooksUseCase };
