import { Router } from 'express';
import UserController from '../controllers/UserController';

const userRoutes = Router();
const userController = new UserController();

userRoutes.get('/', userController.create);

export default userRoutes;
