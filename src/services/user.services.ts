import User, { UserAttributes } from '../models/user.model';

class UserService {
  public getUsers = async (): Promise<User[] | Error> => {
    try {
      const result = await User.findAll();

      if (!result) {
        throw new Error('Cannot find data.');
      }

      return result;
    } catch (error: any) {
      return error.message;
    }
  };

  public getUser = async (id: string): Promise<UserAttributes | Error> => {
    try {
      const result = await User.findByPk(id);

      if (!result) {
        throw new Error('Cannot find data.');
      }

      return result;
    } catch (error: any) {
      return error.message;
    }
  };
}

export default UserService;
