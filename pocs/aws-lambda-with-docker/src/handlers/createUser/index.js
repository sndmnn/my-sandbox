export const handler = async (event) => {
  // const requestBody = event;

  // const { name, email } = requestBody;

  // const usersRepository = new UserRepositoryJson();
  // const createUserService = new CreateUserService(usersRepository);

  // await createUserService.execute({ name, email });

  const response = {
    statusCode: 400,
    body: JSON.stringify({
      message: 'User created successfully',
    }),
  };

  return response;
};
