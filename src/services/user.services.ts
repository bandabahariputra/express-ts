import User from '../models/user.model';

class UserService {
  public getUsers = async (): Promise<User[] | Error> => {
    try {
      const result = await User.findAll();
      return result;
    } catch (error) {
      throw new Error('Cannot find data.');
    }
  };
}

export default UserService;
