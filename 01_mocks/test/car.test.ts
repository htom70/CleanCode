import { Car } from '../src/car'
import { Fuel } from '../src/fuel';

jest.mock('../src/fuel', () => {
    return {
        Fuel: jest.fn().mockImplementation(() => {
            return {
                fill: jest.fn().mockReturnValue(35)
            }
        })
    }
});

describe('Car tests', () => {

    it('should fill the car', () => {
        // Arrange
        const mockedFuel = new Fuel();
        const car = new Car(mockedFuel);

        // Act
        car.drive();

        // Assert
        expect(mockedFuel.fill).toHaveBeenCalledTimes(1);
        expect(mockedFuel.fill).toHaveBeenCalledWith(35);
    })
})