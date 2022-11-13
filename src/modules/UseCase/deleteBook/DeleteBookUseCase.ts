import { IBookRepository } from '../../repositories/IBookRepository';

class DeleteBookUseCase {
	constructor(private bookRepository: IBookRepository) {}

	execute(id: string) {
		const book = this.bookRepository.findById(id);

		if (!book) throw new Error('Book not found!');

		this.bookRepository.delete(id);
	}
}

export { DeleteBookUseCase };
