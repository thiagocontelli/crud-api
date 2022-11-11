interface IUserRepositoryDTO {
	name: string;
	email: string;
	password: string;
}

interface IUserRepository {
	create({ name, email, password }): void;
}

export { IUserRepository, IUserRepositoryDTO };
