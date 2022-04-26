import express from 'express';

import baseRoute from './base.route';
import userRoute from './user.route';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/',
    route: baseRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
