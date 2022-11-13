import { Request, Response } from 'express';
import { UpdateBookUseCase } from './UpdateBookUseCase';

class UpdateBookController {
	constructor(private updateBookUseCase: UpdateBookUseCase) {}

	handle(request: Request, response: Response): Response {
		const { name, author, description, bookBase64 } = request.body;
		const { id } = request.params;

		this.updateBookUseCase.execute({
			name,
			author,
			description,
			bookBase64,
			id,
		});

		return response.status(201).send();
	}
}

export { UpdateBookController };
