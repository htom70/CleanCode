import {Calculator} from "../src/calculator";

describe("Calculator tests", () => {
    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    })

    test('Given I have 2 numbers, When I add them together, Then the sum of the two numbers is returned', () => {
        // Arrange
        const a = 5;
        const b = 3;
        const expected = 8; // a+b

        // Act
        const result = calculator.Add(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have 2 floating point numbers, When I add them together, Then the sum of the two numbers is returned', () => {
        // Arrange
        const a = 5.17;
        const b = 3.32;
        const expected = 8.49; // a+b

        // Act
        const result = calculator.Add(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have numbers, When I add them together, Then the sum of the two numbers is independent of the order of numbers', () => {
        // Arrange
        const a = 5;
        const b = 3;

        // Act
        const result1 = calculator.Add(a, b);
        const result2 = calculator.Add(b, a);

        // Assert
        expect(result1).toBe(result2);
    })

    test('Given I have 2 numbers, When I subtract the second number from the first, Then the difference of the two numbers is returned', () => {
        // Arrange
        const a = 5;
        const b = 3;
        const expected = 2; // a+b

        // Act
        const result = calculator.Subtract(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have 2 floating point numbers, When I subtract the second number from the first, Then the difference of the two numbers is returned', () => {
        // Arrange
        const a = 5.53;
        const b = 3.22;
        const expected = 2.31; // a+b

        // Act
        const result = calculator.Subtract(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have 2 numbers and the second is less than the first, When I subtract the second number from the first, Then the difference is positive', () => {
        // Arrange
        const a = 5;
        const b = 3;

        // Act
        const result = calculator.Subtract(a, b);

        // Assert
        expect(result).toBeGreaterThan(0);
    })

    test('Given I have 2 numbers and the first is less than the second, When I subtract the second number from the first, Then the difference is negative', () => {
        // Arrange
        const a = 3;
        const b = 5;

        // Act
        const result = calculator.Subtract(a, b);

        // Assert
        expect(result).toBeLessThan(0);
    })

    test('Given I have 2 numbers, When I multiply them, Then the product of the two numbers is returned', () => {
        // Arrange
        const a = 5;
        const b = 3;
        const expected = 15; // a+b

        // Act
        const result = calculator.Multiply(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have 2 floating point numbers, When I multiply them, Then the product of the two numbers is returned', () => {
        // Arrange
        const a = 5.1;
        const b = 3.2;
        const expected = 16.32; // a+b

        // Act
        const result = calculator.Multiply(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have numbers, When I multiply them together, Then the product of the two numbers is independent of the order of numbers', () => {
        // Arrange
        const a = 5;
        const b = 3;

        // Act
        const result1 = calculator.Multiply(a, b);
        const result2 = calculator.Multiply(b, a);

        // Assert
        expect(result1).toBe(result2);
    })

    test('Given I have 2 numbers, When divide the divident with the divider, Then the quotient of the two numbers is returned', () => {
        // Arrange
        const a = 6;
        const b = 3;
        const expected = 2; // a+b

        // Act
        const result = calculator.Divide(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have two numbers, one positive and one negative number, When divide the divident with the divider, Then the quotient of the two numbers is negative', () => {
        // Arrange
        const a = -6;
        const b = 3;
        const expected = -2; // a+b

        // Act
        const result = calculator.Divide(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have two negative numbers, When divide the divident with the divider, Then the quotient of the two numbers is positive', () => {
        // Arrange
        const a = -6;
        const b = -3;
        const expected = 2; // a+b

        // Act
        const result = calculator.Divide(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have two numbers, zero and an another positive number, When divide the divident with the divider, Then the quotient of the two numbers is positive zero', () => {
        // Arrange
        const a = 0;
        const b = 3;
        const expected = 0; // a+b

        // Act
        const result = calculator.Divide(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have two numbers, zero and an another negative number, When divide the divident with the divider, Then the quotient of the two numbers is negative zero', () => {
        // Arrange
        const a = 0;
        const b = -3;
        const expected = -0; // a+b

        // Act
        const result = calculator.Divide(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have 2 floating point numbers, When divide the divident with the divider, Then the quotient of the two numbers is returned', () => {
        // Arrange
        const a = 6.22;
        const b = 3.11;
        const expected = 2; // a+b

        // Act
        const result = calculator.Divide(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have 2 numbers and second is zero, When divide the divident with the divider, Then it should be thrown an Error', () => {
        // Arrange
        const a = 6;
        const b = 0;

        // Assert
        expect(() => calculator.Divide(a, b)).toThrow('Cannot divide by zero');
    })

    test('Given I have a number, When I am taking the square root of it, Then the square root of the number is returned', () => {
        // Arrange
        const a = 9;
        const expected = 3; // a+b

        // Act
        const result = calculator.SquareRoot(a);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have a zero number, When I am taking the square root of it, Then zero is returned', () => {
        // Arrange
        const a = 0;
        const expected = 0; // a+b

        // Act
        const result = calculator.SquareRoot(a);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have a negative number, When I am taking the square root of it, Then it should be thrown an error', () => {
        // Arrange
        const a = -1;

        // Assert
        expect(() => calculator.SquareRoot(a)).toThrow('Cannot square root of a negative number');
    })

    test('Given I have 2 numbers x and n, When I\'m raising x to the power of n, Then the power is returned', () => {
        // Arrange
        const a = 3;
        const b = 2;
        const expected = 9; // a+b

        // Act
        const result = calculator.Power(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have 2 numbers x as base and n as exponent, When I\'m raising x to the power of n, Then the 1 divided by x to power of absolute value of n is returned', () => {
        // Arrange
        const a = 3;
        const b = -2;
        const expected = 1/9; // a+b

        // Act
        const result = calculator.Power(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have 2 numbers x as base and n as exponent equals to zero, When I\'m raising x to the power of n, Then 1 is returned', () => {
        // Arrange
        const a = 3;
        const b = 0;
        const expected = 1; // a+b

        // Act
        const result = calculator.Power(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have 2 numbers x as base and n as floating point exponent, When I\'m raising x to the power of n, Then the power is returned', () => {
        // Arrange
        const a = 9;
        const b = 1/2;
        const expected = 3; // a+b

        // Act
        const result = calculator.Power(a, b);

        // Assert
        expect(result).toBe(expected);
    })

    test('Given I have 2 big numbers, x as base and n as floating point exponent, When I\'m raising x to the power of n, Then the power is can not be represent as number', () => {
        // Arrange
        const a = 1000;
        const b = 1000;

        // Act
        const result = calculator.Power(a, b);

        // Assert
        expect(calculator.Power(a,b)).toEqual(Infinity);
    })

})