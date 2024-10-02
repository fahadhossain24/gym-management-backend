import { StatusCodes } from 'http-status-codes';

class ForbiddenError extends Error {
    statusCode: number;

    constructor(message: string) {
        super(message);
        this.statusCode = StatusCodes.FORBIDDEN;

        // Set the prototype explicitly for correct instance checking
        Object.setPrototypeOf(this, ForbiddenError.prototype);
    }
}

export default ForbiddenError;
