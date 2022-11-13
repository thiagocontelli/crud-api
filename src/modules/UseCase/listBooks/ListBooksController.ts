import { Request, Response } from 'express';
import { ListBooksUseCase } from './ListBooksUseCase';

class ListBooksController {
	constructor(private listBooksUseCase: ListBooksUseCase) {}

	handle(request: Request, response: Response): Response {
		const allBooks = this.listBooksUseCase.execute();

		return response.json(allBooks);
	}
}

export { ListBooksController };
