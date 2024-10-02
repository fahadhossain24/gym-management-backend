import mongoose, { Document, Schema } from 'mongoose';
import { ClassSchedule as ClassScheduleType } from './class.types';

export interface ClassScheduleModel extends Document, ClassScheduleType {}

const classScheduleSchema = new Schema<ClassScheduleModel>({
    date: { type: Date, required: true },
    startTime: { type: Date, required: true },
    duration: { type: Number, default: 2 }, // default duration of 2 hours
    trainerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    trainees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

export const ClassSchedule = mongoose.model<ClassScheduleModel>('ClassSchedule', classScheduleSchema);
