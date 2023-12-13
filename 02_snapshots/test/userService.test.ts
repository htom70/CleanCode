import { UserService } from "../src/userService";


describe("UserService tests", () => {
   
    test('Given I have an existing user, When I want to retrive it by ID, Then the user with all properties is returned', () => {
        // Arrange
        const userService = new UserService();

        // Act
        const actualResult = userService.getUserById(1);

        // Assert
        expect(actualResult).toMatchSnapshot();
    })
})