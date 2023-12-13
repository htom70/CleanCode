export class User {
  
    constructor(
      private id: number,
      private username: string,
      private email: string,
      private firstName: string,
      private lastName: string,
      private dateOfBirth: Date,
      private address: {
        street: string;
        city: string;
        zipCode: string;
      },
      private phoneNumber: string,
      private isActive: boolean,
      private roles: string[]
    ) {}
  }