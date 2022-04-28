import bcrypt from 'bcrypt';

import { generateAccessToken } from '../helpers/token';
import User from '../models/user.model';

interface Login {
  message: string;
  user: {
    id: string;
  };
  accessToken: string;
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

      const payloadToken = {
        id: getUser.id,
      };

      const accessToken = generateAccessToken(payloadToken);

      return {
        message: 'Login success.',
        user: {
          id: getUser.id,
        },
        accessToken,
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
