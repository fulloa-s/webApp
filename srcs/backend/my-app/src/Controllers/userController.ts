import Express, { NextFunction, Request, Response } from "express";
import * as userService from "../Services/UserService"

const error = require('http-errors');

class authController {
    static async registerUser(req: Request, res: Response){
        try {
            const user = await userService.registerUser(req.body);
            res.status(200).json({
                status: true,
                message: 'User created successfully',
                data: user.username
            })
        }
        catch (e: any) {
            res.status(200).json({
                status: false,
                message: 'User not created'
            })
        }
    }
}

export {authController}

 