export enum Role {
    ADMIN = 'admin',
    TRAINER = 'trainer',
    TRAINEE = 'trainee'
}

export interface User {
    id: string;
    email: string;
    password: string;
    role: Role;
}
