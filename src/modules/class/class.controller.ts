import { Request, Response } from 'express';
import { ClassService } from './class.service';

const classService = new ClassService();

export class ClassController {
    async createClassSchedule(req: Request, res: Response) {
        try {
            const classSchedule = await classService.createClassSchedule(req.body);
            res.status(201).json({ success: true, data: classSchedule });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    async getClassSchedules(req: Request, res: Response) {
        try {
            const schedules = await classService.getClassSchedules();
            res.status(200).json({ success: true, data: schedules });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}
