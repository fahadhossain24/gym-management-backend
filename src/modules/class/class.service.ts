import { ClassSchedule } from './class.model';
import { ClassSchedule as ClassScheduleType } from './class.types';

export class ClassService {
    async createClassSchedule(data: ClassScheduleType) {
        const classSchedule = new ClassSchedule(data);
        return classSchedule.save();
    }

    async getClassSchedules() {
        return ClassSchedule.find().populate('trainerId', 'email');
    }
}
