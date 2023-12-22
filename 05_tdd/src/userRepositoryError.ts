export class UserRepositoryError extends Error {

    constructor(message: string, private error: Error) {
        super(message);
    }
}