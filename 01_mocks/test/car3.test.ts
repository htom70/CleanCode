jest.enableAutomock();

import { Fuel } from "../src/fuel";

describe('Car tests', () => {

    it('should fill the car', async () => {
        // Arrange
        jest.unmock("../src/car");
        const mod = await import("../src/car")
        const mockedFuel = new Fuel();
        const car = new mod.Car(mockedFuel);

        // Act
        car.drive();

        // Assert
        expect(mockedFuel.fill).toHaveBeenCalledTimes(1);
        expect(mockedFuel.fill).toHaveBeenCalledWith(35);
    })
})