

import { Request, Response, Router } from 'express';
import user from './user';

const routes = Router();

routes.use('/user', user);

export { routes };