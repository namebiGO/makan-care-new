const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const { clerkMiddleware } = require('@clerk/express');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Clerk middleware
app.use(clerkMiddleware());

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/services', require('./routes/serviceRoutes'));
app.use('/api/blogs', require('./routes/blogRoutes'));
app.use('/api/categories', require('./routes/categoryRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));

// For backward compatibility with frontend that uses /api/login and /api/register
app.post('/api/login', require('./routes/authRoutes'));
app.post('/api/register', require('./routes/authRoutes'));

// Health check route
app.get('/api/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Server is running',
        timestamp: new Date().toISOString()
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
