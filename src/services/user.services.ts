import User, { UserAttributes } from '../models/user.model';

class UserService {
  public getUsers = async (): Promise<User[] | Record<string, unknown>> => {
    try {
      const result = await User.findAll();

      if (!result) {
        throw new Error('Cannot find data.');
      }

      return result;
    } catch (error: any) {
      return {
        status: 'error',
        msessage: error.message,
      };
    }
  };

  public getUser = async (
    id: string,
  ): Promise<UserAttributes | Record<string, unknown>> => {
    try {
      const result = await User.findByPk(id);

      if (!result) {
        throw new Error('Cannot find data.');
      }

      return result;
    } catch (error: any) {
      return {
        status: 'error',
        message: error.message,
      };
    }
  };

  public createUser = async (
    data: any,
  ): Promise<string | Record<string, unknown>> => {
    try {
      const saveUser = await User.create(data);

      if (!saveUser) {
        throw new Error('Cannot save data.');
      }

      return 'Success';
    } catch (error: any) {
      return {
        status: 'error',
        message: error.message,
      };
    }
  };

  public updateUser = async (
    id: string,
    data: any,
  ): Promise<string | Record<string, unknown>> => {
    try {
      const user = await User.findByPk(id);

      if (!user) {
        throw new Error('Cannot find data.');
      }

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
      return {
        status: 'error',
        message: error.message,
      };
    }
  };

  public deleteUser = async (
    id: string,
  ): Promise<string | Record<string, unknown>> => {
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
      return {
        status: 'error',
        message: error.message,
      };
    }
  };
}

export default UserService;
