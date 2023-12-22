import { Logger } from "../src/logger";

describe('Logger', () => {

    it('should log the error message', () => {
        // Arrange
        const sut = new Logger();
        const errorMessage = "DbClient failed";
        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
        
        // Act
        sut.logError(errorMessage);

        // Assert
        expect(consoleLogSpy).toHaveBeenCalledWith(errorMessage);
    })
})