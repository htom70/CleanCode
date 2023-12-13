import { Fuel } from "./fuel";

export class GasStation {

    constructor(private fuel: Fuel) { }

    public fillUpCars(numberOfCars: number) {
        for (let index = 1; index < numberOfCars + 1; index++) {
            this.fuel.fill(index + 1);
        }
    }
}