import User, { UserAttributes } from '../models/user.model';

class UserService {
  public getUsers = async (): Promise<User[] | string> => {
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

  public getUser = async (id: string): Promise<UserAttributes | string> => {
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

  public createUser = async (data: any): Promise<string> => {
    try {
      const save = await User.create(data);

      if (!save) {
        throw new Error('Cannot save data.');
      }

      return 'Success';
    } catch (error: any) {
      return 'Error saving data: ' + error.message;
    }
  };

  public updateUser = async (id: string, data: any): Promise<string> => {
    try {
      const update = await User.update(data, {
        where: {
          id,
        },
      });

      if (!update) {
        throw new Error('Cannot update data.');
      }

      return 'Success';
    } catch (error: any) {
      return 'Error updating data: ' + error.message;
    }
  };
}

export default UserService;
