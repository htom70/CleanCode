import { NetworkError } from "./exceptions/NetworkError";
import { NotFoundError } from "./exceptions/NotFoundError";
import { UnknownError } from "./exceptions/UnknownError";
import { ValidationError } from "./exceptions/ValidationError";
import { DbClient } from "./dbclient";
import { Logger } from "./logger";

export class Repository {

    constructor(private dbClient: DbClient, private logger: Logger) { }

    public getUserByUsername(username: string) {
        this.validateInput(username);

        try {
            return this.dbClient.getUserByUsername(username);
        } catch (error) {
            if (error instanceof NetworkError || error instanceof NotFoundError) {
                this.logger.logError(error.message, error);
                throw error;
            }

            throw new UnknownError('Unknown error happened.');
        }
    }

    private validateInput(username: string) {
        if (!username) {
            throw new ValidationError('username cannot be null or empty.');
        }
    }
}