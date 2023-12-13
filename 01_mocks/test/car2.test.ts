import { Car } from "../src/car";
import { Fuel } from "../src/fuel";
import { mock, mockReset } from 'jest-mock-extended';

const mockedFuel = mock<Fuel>();

describe('Car tests', () => {

    it('should fill the car', () => {
        // Arrange
        const car = new Car(mockedFuel);
        const modifiedReturnValue = 42;
        mockedFuel.fill.calledWith(35).mockReturnValue(modifiedReturnValue);

        // Act
        car.drive();

        // Assert
        expect(mockedFuel.fill).toHaveBeenCalledTimes(1);
        expect(mockedFuel.fill).toHaveBeenCalledWith(35);
        expect(mockedFuel.fill).toHaveReturnedWith(modifiedReturnValue);
    })
})