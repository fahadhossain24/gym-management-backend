import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const notFound = (req: Request, res: Response): Response<any> => {
    return res.status(StatusCodes.NOT_FOUND).json({
        message: "Route doesn't exist"
    });
};

export default notFound;
