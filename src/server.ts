import express from 'express';

const app = express();

app.use(express.json())

app.get('/', (request, response) => {
	response.json({ message: 'hello world' });
});

app.listen('3333', () => console.log('Running on localhost:3333'));
