import { delay } from "./common";

export type Response = {
    data: string;
    statusCode: number;
}

export class ApiClient {

    public async downloadUsernames() {
        await delay(2000);
        return ["batman", "superman", "wonderwoman"];
    }

    public async fetchFromUrl(apiUrl: string) : Promise<Response> {
        await delay(100);
        return { data: "some data", statusCode: 200 };
    }
}