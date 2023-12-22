import { Calculator } from "../src/calculator";

describe('Calculator', () => {

    it.each([
        [3, 2, 5],
        [-3, 5, 2],
        [0, 0, 0]
    ])('should add two numbers together and return the sum of them', (a: number, b: number, expectedResult: number) => {
        // Arrange
        const calculator = new Calculator();

        // Act
        const actualResult = calculator.add(a, b);

        // Assert
        expect(actualResult).toBe(expectedResult);
    })
})