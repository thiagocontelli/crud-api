import { Book } from '../../model/Book';
import { IBookRepositoryDTO, IBookRepository } from '../IBookRepository';

class BookRepository implements IBookRepository {
	private books: Book[];

	private static INSTANCE: BookRepository;

	private constructor() {
		this.books = [];
	}

	public static getInstance(): BookRepository {
		if (!BookRepository.INSTANCE) {
			BookRepository.INSTANCE = new BookRepository();
		}

		return BookRepository.INSTANCE;
	}

	create({ name, author, bookBase64, description }: IBookRepositoryDTO) {
		const book = new Book();

		Object.assign(book, {
			name,
			author,
			bookBase64,
			description,
		});

		return this.books.push(book);
	}

	list(): Book[] {
		return this.books;
	}

	update({ id, name, author, bookBase64, description }: Book): void {
		const book = this.books.find(book => book.id === id);

		Object.assign(book, {
			name: name !== '' ? name : book.name,
			author: author !== '' ? author : book.author,
			description: description !== '' ? description : book.description,
			bookBase64: bookBase64 !== '' ? bookBase64 : book.bookBase64,
		});
	}

	delete(id: string): void {
		this.books = this.books.filter(book => book.id !== id);
	}

	findById(id: string): Book {
		return this.books.find(book => book.id === id);
	}

	findByName(name: string): Book {
		return this.books.find(book => book.name === name);
	}
}

export { BookRepository };
