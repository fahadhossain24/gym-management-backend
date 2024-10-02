import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import CustomError from '../../errors';
import sendResponse from '../../shared/utils/sendResponse';

const authService = new AuthService();

export class AuthController {
    async register(req: Request, res: Response) {
        try {
            const { email, password, role } = req.body;
            const user = await authService.register(email, password, role);
            if (!user) {
                throw new CustomError.BadRequestError('User creation failed!');
            }

            sendResponse(res, {
                statusCode: 201,
                success: true,
                message: 'User created successfull',
                data: user
            });
        } catch (error: any) {
            throw new CustomError.BadRequestError(error.message);
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const data = await authService.login(email, password);
            sendResponse(res, {
                statusCode: 200,
                success: true,
                message: 'User login successfull',
                data: data
            });
        } catch (error: any) {
            throw new CustomError.BadRequestError(error.message);
        }
    }
}
