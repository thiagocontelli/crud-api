import { Book } from '../../model/Book';
import { IBookRepository } from '../../repositories/IBookRepository';

class UpdateBookUseCase {
	constructor(private bookRepository: IBookRepository) {}

	execute({ author, bookBase64, description, name, id }: Book) {
		const book = this.bookRepository.findById(id);

		if (!book) throw new Error('Book not found!');

		this.bookRepository.update({ author, bookBase64, description, name, id });
	}
}

export { UpdateBookUseCase };
