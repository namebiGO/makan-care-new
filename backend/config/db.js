const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB Connection Error: ${error.message}`);
        console.warn('⚠️  Server will continue running without database connection');
        console.warn('⚠️  Database-dependent features will not work');
        // Don't exit process in development - allow server to run
        if (process.env.NODE_ENV === 'production') {
            process.exit(1);
        }
    }
};

module.exports = connectDB;
