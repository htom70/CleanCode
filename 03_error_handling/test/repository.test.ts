import { DbClient } from "../src/dbclient";
import { Logger } from "../src/logger";
import { Repository } from "../src/repository"
import { mock, mockReset } from 'jest-mock-extended';
import { User } from "../src/user";
import { NetworkError } from "../src/exceptions/NetworkError";
import { NotFoundError } from "../src/exceptions/NotFoundError";
import { ValidationError } from "../src/exceptions/ValidationError";

describe('Repository tests', () => {
    let sut: Repository;
    const mockDbClient = mock<DbClient>();
    const mockLogger = mock<Logger>();
    const username = 'batman';

    beforeEach(() => {
        mockReset(mockDbClient);
        mockReset(mockLogger);

        sut = new Repository(mockDbClient, mockLogger);
    })

    describe('Happy path', () => {
        it('should return the user when retrieved by username', () => {
            // Arrange
            const user = new User(
                1,
                'john_doe',
                'john@example.com',
                'John',
                'Doe',
                new Date('1990-01-15')
            );
            mockDbClient.getUserByUsername.mockReturnValue(user);

            // Act
            const result = sut.getUserByUsername(username);

            // Assert
            expect(result).toMatchSnapshot();
            expect(mockDbClient.getUserByUsername).toBeCalledTimes(1);
            expect(mockDbClient.getUserByUsername).toBeCalledWith(username);
            expect(mockLogger.logError).toBeCalledTimes(0);
        })
    })

    describe('Error paths', () => {
        it('should throw a not found error if the user does not exist', () => {
            // Arrange
            const errorMessage = "User was not found.";
            const expectedError = new NotFoundError(errorMessage);
            mockDbClient.getUserByUsername.mockImplementation(() => { throw expectedError });

            // Act
            expect(() => sut.getUserByUsername(username)).toThrow(expectedError)
            expect(mockDbClient.getUserByUsername).toBeCalledTimes(1);
            expect(mockDbClient.getUserByUsername).toBeCalledWith(username)
            expect(mockLogger.logError).toBeCalledTimes(1);
            expect(mockLogger.logError).toBeCalledWith(errorMessage, expectedError);
        })

        it('should throw a network error if the DatabaseClient cannot connect to the database', () => {
            // Arrange
            const errorMessage = "Network failure happened.";
            const expectedError = new NetworkError(errorMessage);
            mockDbClient.getUserByUsername.mockImplementation(() => { throw expectedError });

            // Act
            expect(() => sut.getUserByUsername(username)).toThrow(expectedError)
            expect(mockDbClient.getUserByUsername).toBeCalledTimes(1);
            expect(mockDbClient.getUserByUsername).toBeCalledWith(username)
            expect(mockLogger.logError).toBeCalledTimes(1);
            expect(mockLogger.logError).toBeCalledWith(errorMessage, expectedError);
        })

        it('should throw a validation error if the username is empty', () => {
            // Arrange
            const errorMessage = 'username cannot be null or empty.';
            const expectedError = new ValidationError(errorMessage);
            mockDbClient.getUserByUsername.mockImplementation(() => { throw expectedError });

            // Act
            expect(() => sut.getUserByUsername('')).toThrow(expectedError)
            expect(mockDbClient.getUserByUsername).toBeCalledTimes(0);
            expect(mockLogger.logError).toBeCalledTimes(0);
        })
    })

})