import bcrypt from 'bcrypt';

import User from '../models/user.model';

interface Login {
  user: {
    id: string;
  };
}

class AuthService {
  public signIn = async (data: {
    email: string;
    password: string;
  }): Promise<Login | { status: string; message: string }> => {
    const { email, password } = data;

    try {
      const getUser = await User.findOne({
        where: { email },
      });

      if (!getUser) {
        throw new Error('User not found.');
      }

      const matchPassword = bcrypt.compareSync(password, getUser.password);

      if (!matchPassword) {
        throw new Error('Wrong password.');
      }

      return {
        user: {
          id: getUser.id,
        },
      };
    } catch (error: any) {
      return {
        status: 'error',
        message: error.message,
      };
    }
  };
}

export default AuthService;
