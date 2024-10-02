import { Response } from 'express';

type IApiResponse<T> = {
    statusCode: number;
    success: boolean;
    message?: string | null;
    errorDetails?:
        | {
              field?: string;
              message?: string;
          }
        | string
        | null;
    meta?: {
        page?: number;
        limit?: number;
        total?: number;
    };
    data?: T | null;
};

const sendResponse = <T>(res: Response, data: IApiResponse<T>): void => {
    const responseData: IApiResponse<T> = {
        statusCode: data.statusCode,
        success: data.success,
        message: data.message || null,
        errorDetails: data.errorDetails || null,
        meta: data.meta || undefined,
        data: data.data || null
    };

    res.status(data.statusCode).json(responseData);
};

export default sendResponse;
