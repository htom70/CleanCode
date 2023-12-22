import { DbClient } from "../src/dbClient";

describe('DbClient', () => {

    it('should return the available user names', () => {
        // Arrange
        const sut = new DbClient();

        // Act
        const actualResult = sut.getUserNames();

        // Assert
        expect(actualResult).toHaveLength(3);
    })
})