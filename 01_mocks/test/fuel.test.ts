import { Fuel } from "../src/fuel";

describe('Fuel tests', () => {
    it('should fill the tank', () => {
        // Arrange
        const fuel = new Fuel();
        const liters = 34;

        // Act
        const result = fuel.fill(liters);

        // Assert
        expect(result).toBe(liters);
    })
})