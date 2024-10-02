import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

interface CustomError extends Error {
    statusCode?: number;
    code?: number;
    errors?: Record<string, any>;
    keyValue?: Record<string, any>;
}

const devErrorResponse = (error: CustomError, res: Response) => {
    return res.status(error.statusCode!).json({
        error: error.message,
        errorTrace: error.stack
    });
};

const prodErrorResponse = (error: CustomError, res: Response) => {
    return res.status(error.statusCode!).json({
        error: error.message
    });
};

const globalErrorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    err.statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    err.message = err.message || 'Something went wrong, try again later';

    if (err.name === 'ValidationError' && err.errors) {
        err.message = Object.values(err.errors)
            .map((item: any) => item.message)
            .join(',');
        err.statusCode = StatusCodes.BAD_REQUEST;
    }

    if (err.code === 11000 && err.keyValue) {
        err.message = `${Object.keys(err.keyValue)} already exists!`;
        err.statusCode = StatusCodes.BAD_REQUEST;
    }

    if (process.env.NODE_ENV?.trim() === 'development') {
        devErrorResponse(err, res);
    } else if (process.env.NODE_ENV?.trim() === 'production') {
        prodErrorResponse(err, res);
    } else {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: 'Unknown environment, please check configuration.'
        });
    }
};

export default globalErrorHandler;
