import { Router } from 'express';
import { bookRoutes } from './user.routes';

const router = Router();

router.use('/books', bookRoutes);

export { router };
