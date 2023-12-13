import { User } from "./user";

export class DbClient {

    public getUserByUsername(username: string) {
        return new User(
            1,
            'john_doe',
            'john@example.com',
            'John',
            'Doe',
            new Date('1990-01-15')
          );
    }
}