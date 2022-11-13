import { Book } from '../model/Book';

interface IBookRepositoryDTO {
	name: string;
	author: string;
	description: string;
	bookBase64: string;
}

interface IBookRepository {
	create({ name, author, bookBase64, description }: IBookRepositoryDTO): void;
	findById(id: string): Book;
	findByName(name: string): Book;
	list(): Book[];
	update({ name, author, bookBase64, description, id }: Book): void;
	delete(id: string): void;
}

export { IBookRepository, IBookRepositoryDTO };
