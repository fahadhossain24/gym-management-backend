import mongoose from 'mongoose';
import config from './config';
import app from './app';

const dbConnection = async (): Promise<void> => {
    try {
        await mongoose.connect(config.database_url);
        console.log('Database connected');

        app.listen(config.server_port, () => {
            console.log(`Server started on ${config.server_hostname}:${config.server_port}`);
        });
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
};

dbConnection();
