import { Request, Response } from 'express';

import UserService from '../services/user.services';

class UserController {
  private UserService = new UserService();

  public getUsers = async (req: Request, res: Response) => {
    const data = await this.UserService.getUsers();
    return res.status(200).send(data);
  };

  public getUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    const data = await this.UserService.getUser(id);
    return res.status(200).send(data);
  };
}

export default UserController;
