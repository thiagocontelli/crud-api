import { v4 as uuidv4 } from 'uuid';

class Book {
	id?: string;
	name: string;
	author: string;
	description: string;
	bookBase64: string;

	constructor() {
		if (!this.id) {
			this.id = uuidv4();
		}
	}
}

export { Book };
