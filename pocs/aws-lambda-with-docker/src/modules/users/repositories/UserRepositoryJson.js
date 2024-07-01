import User from '../models/User';
import fs from 'fs/promises';
import path from 'path';

export default class UserRepositoryJson {
  async readUsers() {
    const data = await fs.readFile(
      path.resolve(__dirname, '..', '..', '..', 'data', 'users.json'),
      {
        encoding: 'utf-8',
      }
    );

    return JSON.parse(data);
  }

  async findById(userId) {
    const users = await this.readUsers();
    return users.find((user) => user.id === userId);
  }

  async create({ name, email }) {
    const users = await this.readUsers();

    if (users.some((user) => user.email === email)) {
      throw new Error('Email already registered');
    }

    const newUser = new User(name, email);
    users.push(newUser);

    await fs.writeFile(
      path.resolve(__dirname, '..', '..', '..', 'data', 'users.json'),
      JSON.stringify(users, null, 2)
    );

    return newUser;
  }

  updateById(userId, { name, email }) {
    UserRepositoryMemory = UserRepositoryMemory.users.map((user) => {
      if (user.id === userId) {
        return new User(name, email);
      }

      return user;
    });
  }

  deleteById(userId) {
    UserRepositoryMemory.users = UserRepositoryMemory.users.filter(
      (user) => user.id !== userId
    );
  }
}
