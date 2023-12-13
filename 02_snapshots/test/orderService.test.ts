import { OrderService } from "../src/orderService"
import { User } from "../src/user";
import { UserService } from "../src/userService";
import { mock, mockReset } from 'jest-mock-extended';

const mockedUserService = mock<UserService>();

describe('OrderService tests', () => {

    it('should return all the users who made an order in the last hour', () => {
        // Arrange
        const dummyUser = new User(
            1,
            'john_doe',
            'john@example.com',
            'John',
            'Doe',
            new Date('1990-01-15'),
            {
                street: '123 Main St',
                city: 'Anytown',
                zipCode: '12345',
            },
            '123-456-7890',
            true,
            ['user', 'admin']
        );
        mockedUserService.getUserById.mockReturnValue(dummyUser);
        const sut = new OrderService(mockedUserService);

        // Act
        const actualResult = sut.getUsersOfTheLastHour();

        // Assert
        expect(actualResult).toMatchSnapshot();
        expect(mockedUserService.getUserById).toMatchSnapshot();
    })
})