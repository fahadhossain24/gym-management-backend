import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from './auth.model';
import { User as UserType, Role } from './auth.types';
import CustomError from '../../errors';

export class AuthService {
    async register(email: string, password: string, role: Role = Role.TRAINEE) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ email, password: hashedPassword, role });
        return user.save();
    }

    async login(email: string, password: string) {
        const user = await User.findOne({ email });
        if (!user) throw new CustomError.BadRequestError('User not found!');
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new CustomError.BadRequestError('Invalid credentials');
        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET as string);
        return { token, user };
    }
}
