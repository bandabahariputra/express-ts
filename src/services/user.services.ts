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
      const saveUser = await User.create(data);

      if (!saveUser) {
        throw new Error('Cannot save data.');
      }

      return 'Success';
    } catch (error: any) {
      return 'Error saving data: ' + error.message;
    }
  };

  public updateUser = async (id: string, data: any): Promise<string> => {
    try {
      const updateUser = await User.update(data, {
        where: {
          id,
        },
      });

      if (!updateUser) {
        throw new Error('Cannot update data.');
      }

      return 'Success';
    } catch (error: any) {
      return 'Error updating data: ' + error.message;
    }
  };

  public deleteUser = async (id: string): Promise<string> => {
    try {
      const deleteUser = await User.destroy({
        where: {
          id,
        },
      });

      if (!deleteUser) {
        throw new Error('Cannot delete data.');
      }

      return 'Success';
    } catch (error: any) {
      return 'Error deleting data: ' + error.message;
    }
  };
}

export default UserService;
