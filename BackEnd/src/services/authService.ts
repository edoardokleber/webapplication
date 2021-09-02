import express, { Request, Response, NextFunction } from 'express';

export default {
    async checkUser(request: Request, response: Response, next: NextFunction) {
        let key: string = request.headers['authorization'];
        if (key != undefined) {
            next();
        } else {
            response.status(401);
            response.send();
        }
    }
}