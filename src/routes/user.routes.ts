import { Router } from 'express';

import { createUserController } from '../modules/UseCase/createUser';
import { deleteUserController } from '../modules/UseCase/deleteUser';
import { listUsersController } from '../modules/UseCase/listUsers';
import { updateUserController } from '../modules/UseCase/updateUser';

const userRoutes = Router();

userRoutes.post('/', (request, response) => {
	return createUserController.handle(request, response);
});

userRoutes.get('/', (request, response) => {
	return listUsersController.handle(request, response);
});

userRoutes.put('/:id', (request, response) => {
	return updateUserController.handle(request, response);
});

userRoutes.delete('/:id', (request, response) => {
	return deleteUserController.handle(request, response);
});

export { userRoutes };
