import { Logger } from "../src/logger";

describe('Logger', () => {
    it('should log an error message to console', () => {
        // Arrange
        const errorMessage = 'Something went south';
        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
        const logger = new Logger();

        // Act
        logger.logError(errorMessage);

        // Arrange
        expect(consoleLogSpy).toHaveBeenCalledWith(errorMessage);
    })
})