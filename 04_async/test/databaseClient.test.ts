import { DatabaseClient } from "../src/databaseClient"

describe('DatabaseClient tests', () => {
    it('should return all the usernames', async () => {
        // Arrange
        const dbClient = new DatabaseClient();

        // Act
        const result = await dbClient.getAllUsernames();

        // Assert
        expect(result).toMatchSnapshot();

    })
})
