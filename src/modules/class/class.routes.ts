import { Router } from 'express';
import { ClassController } from './class.controller';
import { authMiddleware } from '../../shared/middlewares/auth.middleware';

const classRouter = Router();
const classController = new ClassController();

classRouter.post('/', authMiddleware, classController.createClassSchedule);
classRouter.get('/', classController.getClassSchedules);

export default classRouter;
