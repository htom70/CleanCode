import { Fuel } from "../src/fuel";
import { GasStation } from "../src/gasstation"

jest.mock('../src/fuel', () => {
    return {
        Fuel: jest.fn().mockImplementation(() => {
            return {
                fill: jest.fn().mockReturnValueOnce(2).mockReturnValueOnce(3).mockReturnValueOnce(4)
            }
        })
    }
});

describe('GasStation tests', () => {

    it('should fill up multiple cars', () => {
        // Arrange
        const mockedFuel = new Fuel();
        const gasStation = new GasStation(mockedFuel);
        const numberOfCars = 3;

        // Act
        gasStation.fillUpCars(numberOfCars);

        // Assert
        expect(mockedFuel.fill).toHaveBeenCalledTimes(numberOfCars);
        expect(mockedFuel.fill).toHaveBeenNthCalledWith(1, 2);
        expect(mockedFuel.fill).toHaveNthReturnedWith(1, 2);

        expect(mockedFuel.fill).toHaveBeenNthCalledWith(2, 3);
        expect(mockedFuel.fill).toHaveNthReturnedWith(2, 3);

        expect(mockedFuel.fill).toHaveBeenNthCalledWith(3, 4);
        expect(mockedFuel.fill).toHaveNthReturnedWith(3, 4);
    })
})