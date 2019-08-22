import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Andre Praeiro',
    email: 'andrepraeiro@gmail.com',
    password_hash: '12345454545',
  });

  return res.json(user);
});

export default routes;
