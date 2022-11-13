import express from 'express';
import { router } from './routes';
import cors from 'cors';

const app = express();

const corsOptions = {
	origin: '*',
	credentials: true,
	optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json({limit: '500mb'}));

app.use(router);

app.listen('3333', () => console.log('Running on localhost:3333'));
