import { Router } from 'express';

import { createBookController } from '../modules/UseCase/createBook';
import { deleteBookController } from '../modules/UseCase/deleteBook';
import { listBooksController } from '../modules/UseCase/listBooks';
import { updateBookController } from '../modules/UseCase/updateBook';

const bookRoutes = Router();

bookRoutes.post('/', (request, response) => {
	return createBookController.handle(request, response);
});

bookRoutes.get('/', (request, response) => {
	return listBooksController.handle(request, response);
});

bookRoutes.put('/:id', (request, response) => {
	return updateBookController.handle(request, response);
});

bookRoutes.delete('/:id', (request, response) => {
	return deleteBookController.handle(request, response);
});

export { bookRoutes };
