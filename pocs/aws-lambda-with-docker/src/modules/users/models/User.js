import { randomUUID } from 'crypto';

export default class User {
  constructor(name, email) {
    this.id = randomUUID();
    this.name = name;
    this.email = email;
  }
}
