import { Router } from 'express';
import { TraineeController } from './trainee.controller';
import { authMiddleware } from '../../shared/middlewares/auth.middleware';

const traineeRouter = Router();
const traineeController = new TraineeController();

traineeRouter.post('/', authMiddleware, traineeController.createTrainee);
traineeRouter.get('/', traineeController.getTrainees);
traineeRouter.put('/:id', authMiddleware, traineeController.updateTrainee);
traineeRouter.delete('/:id', authMiddleware, traineeController.deleteTrainee);

export default traineeRouter;
