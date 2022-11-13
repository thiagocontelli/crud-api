import { Request, Response } from 'express';
import { DeleteBookUseCase } from './DeleteBookUseCase';

class DeleteBookController {
	constructor(private deleteBookUseCase: DeleteBookUseCase) {}

	handle(request: Request, response: Response): Response {
		const { id } = request.params;

		this.deleteBookUseCase.execute(id);

		return response.status(201).send();
	}
}

export { DeleteBookController };
