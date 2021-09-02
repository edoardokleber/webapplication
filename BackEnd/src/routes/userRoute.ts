import { Router } from 'express';
import UserController from '../controllers/UserController';
import AuthService from '../services/AuthService';

const userRoute = Router();

userRoute.get('/', AuthService.checkUser, UserController.get);
userRoute.post('/', AuthService.checkUser, UserController.create);

export default userRoute;