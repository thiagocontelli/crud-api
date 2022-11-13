import { IBookRepository } from '../../repositories/IBookRepository';

interface IRequest {
	name: string;
	author: string;
	description: string;
	bookBase64: string;
}

class CreateBookUseCase {
	constructor(private bookRepository: IBookRepository) {}

	execute({ name, author, bookBase64, description }: IRequest): void {
		const bookAlreadyExists = this.bookRepository.findByName(name);

		if (bookAlreadyExists) throw new Error('Book already exists!');

		this.bookRepository.create({ name, author, bookBase64, description });
	}
}

export { CreateBookUseCase };
