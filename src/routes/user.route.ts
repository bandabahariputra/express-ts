import express from 'express';

import UserController from '../controllers/user.controller';
import Validation from '../middlewares/validation';
import userValidation from '../validations/user.validation';

const router = express.Router();

const validation = new Validation();
const userController = new UserController();

router
  .route('/')
  .get(validation.run(userValidation.getUsers), userController.getUsers)
  .post(validation.run(userValidation.createUser), userController.createUser);

router
  .route('/:id')
  .get(validation.run(userValidation.getUser), userController.getUser)
  .patch(validation.run(userValidation.updateUser), userController.updateUser)
  .delete(validation.run(userValidation.getUser), userController.deleteUser);

export default router;
