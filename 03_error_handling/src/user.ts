export class User {
  
    constructor(
      private id: number,
      private username: string,
      private email: string,
      private firstName: string,
      private lastName: string,
      private dateOfBirth: Date
    ) {}
  }