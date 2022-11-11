import { Router } from 'express';

import { createUserController } from '../modules/UseCase/createUser';

const userRoutes = Router();

userRoutes.post('/create', (request, response) => {
	return createUserController.handle(request, response);
});

export { userRoutes };
