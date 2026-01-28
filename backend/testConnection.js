const mongoose = require('mongoose');
require('dotenv').config();

console.log('Testing MongoDB Connection...');
console.log('Connection String:', process.env.MONGODB_URI.replace(/:[^:]*@/, ':****@'));

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('✓ MongoDB Connected Successfully!');
        console.log('Host:', mongoose.connection.host);
        console.log('Database:', mongoose.connection.name);
        process.exit(0);
    })
    .catch((error) => {
        console.error('✗ Connection Failed!');
        console.error('Error Name:', error.name);
        console.error('Error Message:', error.message);

        if (error.message.includes('bad auth')) {
            console.error('\nPossible solutions:');
            console.error('1. Verify username and password in MongoDB Atlas');
            console.error('2. Check if the database user exists');
            console.error('3. Ensure your IP is whitelisted in Network Access');
            console.error('4. Try resetting the password in MongoDB Atlas');
        }

        process.exit(1);
    });
