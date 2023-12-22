import { ApiClient } from "../src/apiClient";
import { DatabaseClient } from "../src/databaseClient";
import { UserDataMigrator } from "../src/userDataMigrator";
import { mock, mockReset } from 'jest-mock-extended';

const mockDbClient = mock<DatabaseClient>();
const mockApiClient = mock<ApiClient>();

describe('UserDataMigrator tests', () => {
    let sut: UserDataMigrator;
    const apiResult = ["spider man", "wolverine"];

    beforeEach(() => {
        mockReset(mockDbClient);
        mockReset(mockApiClient);
        sut = new UserDataMigrator(mockDbClient, mockApiClient);
    })

    describe('Migrate', () => {
        describe('Happy path', () => {
            it('should migrate userdata from the API into the Database', async () => {
                // Arrange
                mockApiClient.downloadUsernames.mockResolvedValue(apiResult);
        
                // Act
                await sut.migrate();
        
                // Assert
                expect(mockApiClient.downloadUsernames).toBeCalledTimes(1);
                expect(mockDbClient.saveIntoDatabase).toBeCalledTimes(1);
                expect(mockDbClient.saveIntoDatabase).toBeCalledWith(apiResult);
            })
        })
    
        describe('Error path', () => {
            it('should throw an error when it cannot connect to the database', async () => {
                // Arrange
                mockApiClient.downloadUsernames.mockResolvedValue(apiResult);
                const error = new Error("Database connection failure");
                mockDbClient.saveIntoDatabase.mockImplementation(() => { throw error });
        
                // Act and Assert
                await expect(sut.migrate()).rejects.toThrow(error);
                expect(mockApiClient.downloadUsernames).toBeCalledTimes(1);
                expect(mockDbClient.saveIntoDatabase).toBeCalledTimes(1);
                expect(mockDbClient.saveIntoDatabase).toBeCalledWith(apiResult);
            })
    
            it('should throw an error when it cannot reach the API', async () => {
                // Arrange
                const error = new Error("Network failure");
                mockApiClient.downloadUsernames.mockImplementation(() => { throw error })
        
                // Act and Assert
                await expect(sut.migrate()).rejects.toThrow(error);
                expect(mockApiClient.downloadUsernames).toBeCalledTimes(1);
                expect(mockDbClient.saveIntoDatabase).toBeCalledTimes(0);
            })
        })
    })

    describe('CanDownload', () => {

        const testCases = [
            {
                apiUrl: 'https://something.edu',
                data: "success",
                statusCode: 200,
                expectedResult: true
            },
            {
                apiUrl: 'https://something.edu',
                data: "bad request",
                statusCode: 400,
                expectedResult: false
            },
            {
                apiUrl: 'https://something.edu',
                data: "internal server error",
                statusCode: 500,
                expectedResult: false
            }
        ]
        test.each(testCases)('fetching data from the API', async (testCases) => {
            // Arrange
            mockApiClient.fetchFromUrl.mockResolvedValue({
                data: testCases.data,
                statusCode: testCases.statusCode
            })
            
            // Act
            const actualResult = await sut.canDownload(testCases.apiUrl);

            // Assert
            expect(actualResult).toBe(testCases.expectedResult);
        })

        it.each`
        testName | apiUrl | data | statusCode | expectedResult
        ${'Success'} | ${'https://something.edu'} | ${'some data'} | ${200} | ${true}
        ${'Bad request'} | ${'https://something.edu'} | ${'some data'} | ${400} | ${false}
        ${'Internal server error'} | ${'https://something.edu'} | ${'some data'} | ${500} | ${false}
        `('$testName HTTP$statusCode - fetching data from API', async ({ apiUrl, data, statusCode, expectedResult }) => {
            // Arrange
            mockApiClient.fetchFromUrl.mockResolvedValue({
                data: data,
                statusCode: statusCode
            })
            
            // Act
            const actualResult = await sut.canDownload(apiUrl);

            // Assert
            expect(actualResult).toBe(expectedResult);
            expect(mockApiClient.fetchFromUrl).toBeCalledTimes(1);
            expect(mockApiClient.fetchFromUrl).toBeCalledWith(apiUrl);
        });
    })
})