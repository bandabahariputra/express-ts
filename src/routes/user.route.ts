import express from 'express';

import UserController from '../controllers/user.controller';

const router = express.Router();

const userController = new UserController();

router.route('/').get(userController.getUsers);
router.route('/:id').get(userController.getUser);

export default router;
