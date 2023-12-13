import { Fuel } from "./fuel";

export class Car {

    constructor(private fuel: Fuel) { }

    public drive() {
        this.fuel.fill(35);
    }
}