import { mock } from 'jest-mock-extended';
import { DbClient } from '../src/dbClient';
import { UserRepository } from '../src/userRepository';
import { UserRepositoryError } from '../src/userRepositoryError';
import { Logger } from '../src/logger';

const mockedDatabaseClient = mock<DbClient>();
const mockedLogger = mock<Logger>();

describe('UserRepository', () => {
    let sut: UserRepository;

    beforeEach(() => {
        sut = new UserRepository(mockedDatabaseClient, mockedLogger);
    })

    it('should return all the usernames', () => {
        // Arrange     
        const mockUserNames = ["spider man", "captain marvel"];
        mockedDatabaseClient.getUserNames.mockReturnValue(mockUserNames);

        // Act
        const actualResult = sut.getUserNames();

        // Assert
        expect(actualResult).toMatchSnapshot();
    })

    it('should throw a custom error if there is any error thrown from the db client', () => {
        // Arrange
        const error = new Error('DB connection failed.');
        mockedDatabaseClient.getUserNames.mockImplementation(() => { throw error });
        const customErrorMessage = 'DbClient failed.';

        const expectedError = new UserRepositoryError(customErrorMessage, error);

        // Act and assert
        expect(() => { sut.getUserNames() }).toThrow(expectedError);
        expect(mockedLogger.logError).toHaveBeenCalledTimes(1);
        expect(mockedLogger.logError).toHaveBeenCalledWith(customErrorMessage);
    })
})