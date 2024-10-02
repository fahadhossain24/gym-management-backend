import mongoose, { Document, Schema } from 'mongoose';
import { Role } from './auth.types';

export interface UserModel extends Document {
    email: string;
    password: string;
    role: Role;
}

const userSchema = new Schema<UserModel>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: Object.values(Role), default: Role.TRAINEE }
});

export const User = mongoose.model<UserModel>('User', userSchema);
