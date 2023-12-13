import { User } from "./user";

export class UserService {

  public getUserById(id: number) {
    // simulate a real user data retrieval here
    return new User(
      id,
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
  }
}
