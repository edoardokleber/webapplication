import { Request, Response } from 'express';
import UserModel, { IUser } from '../models/UserModel';

const users = [
    { name: 'Edoardo', email: 'edoardokleber@hotmail.com' },
];

export default {
    async get(req: Request, res: Response) {
        console.log("inside get");
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const userModel = new UserModel();
        let user: IUser = {
            name: "Edoardo",
            email: "edoardokleber@hotmail.com",
            password: "password"
        }

        await userModel.create(user);

        console.log("create finished!");

        return res.send();
    }
};