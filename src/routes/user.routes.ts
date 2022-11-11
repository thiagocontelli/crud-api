import { Router } from 'express';

import { createUserController } from '../modules/UseCase/createUser';
import { listUsersController } from '../modules/UseCase/listUsers';

const userRoutes = Router();

userRoutes.post('/', (request, response) => {
	return createUserController.handle(request, response);
});

userRoutes.get('/', (request, response) => {
	return listUsersController.handle(request, response);
});

export { userRoutes };
