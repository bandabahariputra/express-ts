import express from 'express';

import UserController from '../controllers/user.controller';

const router = express.Router();

const userController = new UserController();

router.route('/').get(userController.getUsers).post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

export default router;
