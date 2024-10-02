export interface ClassSchedule {
    date: Date;
    startTime: Date;
    duration: number; // in hours
    trainerId: string;
    trainees: string[]; // Array of trainee IDs
}
