import { Router } from 'express';
import userRoutes from './user';
import sessionRoutes from './session';

const routes = Router();
const prefixRoutes = '/api/v1';

routes.get('/', (request, response) => {
  response.json({ message: 'JSON' });
});

routes.use(`${prefixRoutes}/users`, userRoutes);
routes.use(`${prefixRoutes}/sessions`, sessionRoutes);

export default routes;
