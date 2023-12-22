import { DbClient } from "./dbClient";
import { Logger } from "./logger";
import { UserRepositoryError } from "./userRepositoryError";

export class UserRepository {

    constructor(private dbClient: DbClient, private logger: Logger) {}

    public getUserNames() {
        try {
            return this.dbClient.getUserNames();
        } catch (error) {
            const errorMessage = 'DbClient failed.';
            this.logger.logError(errorMessage)
            throw new UserRepositoryError(errorMessage, error as Error);
        }
    }
}