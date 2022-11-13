import { Request, Response } from 'express';
import { UpdateUserUseCase } from './UpdateUserUseCase';

class UpdateUserController {
	constructor(private updateUserUseCase: UpdateUserUseCase) {}

	handle(request: Request, response: Response): Response {
		const { name, email, password } = request.body;
		const { id } = request.params;

		this.updateUserUseCase.execute({ name, email, password, id });

		return response.status(201).send();
	}
}

export {UpdateUserController}
