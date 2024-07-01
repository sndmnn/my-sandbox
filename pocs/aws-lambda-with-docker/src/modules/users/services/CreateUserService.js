export default class CreateUserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({ name, email }) {
    if (this.userRepository.isEmailRegistered(email)) {
      throw new Error('Email already registered');
    }

    const user = await this.userRepository.create({ name, email });
    return user;
  }
}
