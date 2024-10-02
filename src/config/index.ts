import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    path: path.join(process.cwd(), '.env')
});

export default {
    server_hostname: process.env.SERVER_HOSTNAME || 'localhost',
    server_port: process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 5000,
    database_url: process.env.DATABASE_URL || 'mongodb://localhost:27017/gym_management'
};
