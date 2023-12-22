import { delay } from "./common";

export class DatabaseClient {

    public async getAllUsernames() : Promise<string[]> {
        await delay(3000);
        return ["batman", "superman", "wonderwoman"];
    }

    public async saveIntoDatabase(usernames: string[]): Promise<void> {
        await delay(1500);
    }
}