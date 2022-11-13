import { Request, Response } from 'express';
import { CreateBookUseCase } from './CreateBookUseCase';

class CreateBookController {
	constructor(private createBookUseCase: CreateBookUseCase) {}

	handle(request: Request, response: Response): Response {
		const { name, author, bookBase64, description } = request.body;

		this.createBookUseCase.execute({ name, author, bookBase64, description });

		return response.status(201).send();
	}
}

export { CreateBookController };
