import { Router } from 'express';
import authRouter from '../modules/auth/auth.routes';
import classRouter from '../modules/class/class.routes';
import traineeRouter from '../modules/trainee/trainee.routes';
import trainerRouter from '../modules/trainer/trainer.routes';

const router = Router();

router.use('/auth', authRouter);
router.use('/class', classRouter);
router.use('/trainee', traineeRouter);
router.use('/trainer', trainerRouter);

export default router;
