import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './middlewares/globalErrorHandler';
import notFound from './middlewares/notFound';
import router from './router';

const app: Application = express();

// global middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application middleware
app.use('/v1', router);

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ hello: 'world!' });
});

// error handling middlewares
app.use(globalErrorHandler);
app.use(notFound);

export default app;
