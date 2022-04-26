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

  public createUser = async (req: Request, res: Response) => {
    const data = req.body;

    const save = await this.UserService.createUser(data);
    return res.status(200).send(save);
  };

  public updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;

    const update = await this.UserService.updateUser(id, data);
    return res.status(200).send(update);
  };
}

export default UserController;
