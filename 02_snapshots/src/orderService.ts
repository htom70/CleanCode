import { UserService } from "./userService";

export class OrderService {

    constructor(private userService: UserService) { }

    public getUsersOfTheLastHour() {
        const users = [];
        for (let index = 1; index < 5; index++) {
            const user = this.userService.getUserById(index);
            users.push(user);
        }
        return users;
    }
}