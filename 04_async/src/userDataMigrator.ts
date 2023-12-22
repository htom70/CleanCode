import { ApiClient } from "./apiClient";
import { DatabaseClient } from "./databaseClient";

export class UserDataMigrator {

    constructor(private dbClient: DatabaseClient, private apiClient: ApiClient) {}

    public async migrate() {
        const usernamesFromApi = await this.downloadFromApi();
        await this.dbClient.saveIntoDatabase(usernamesFromApi);
    }

    public async canDownload(apiUrl: string) {
        const response = await this.apiClient.fetchFromUrl(apiUrl);
        if (response.statusCode === 200) {
            return true;
        }

        return false;
    }

    private async downloadFromApi() {
        return await this.apiClient.downloadUsernames();
    }

    private async saveIntoDatabase(usernames: string[]) {
        await this.dbClient.saveIntoDatabase(usernames);
    }
}