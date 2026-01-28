const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Service = require('../models/Service');
const Blog = require('../models/Blog');
const Category = require('../models/Category');

// Load environment variables
dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Connected for seeding');
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
};

// Sample data for categories
const categories = [
    { value: 'gardening', label: 'Gardening' },
    { value: 'plumbing', label: 'Plumbing' },
    { value: 'electrician', label: 'Electrician' },
];

// Sample data for services
const services = [
    {
        title: 'Gardening',
        description: 'Transform your outdoor space with our expert gardening services! Whether you need regular lawn maintenance, professional tree care, or a complete landscape makeover, we\'ve got you covered. Our team ensures your garden stays lush, vibrant, and pest-free all year round.',
        subcategories: [
            {
                title: 'Lawn Maintenance',
                description: 'A well-maintained lawn adds beauty and value to your property. Our services include mowing, fertilizing, aeration, and weed control to keep your grass green and healthy all year.',
                image: '/images/gardening_1.jpg',
                rating: 4.5,
                reviews: 120,
                price: 50,
                duration: '2-4 hours',
            },
            {
                title: 'Tree and Plant Care',
                description: 'Healthy trees and plants are essential for a thriving garden. We provide pruning, disease prevention, and nourishment to ensure your plants grow strong and beautiful.',
                image: '/images/gardening_2.jpg',
                rating: 4.7,
                reviews: 90,
                price: 80,
                duration: '3-6 hours',
            },
            {
                title: 'Fencing',
                description: 'Enhance security and privacy with our durable fencing solutions. We install and maintain fences that complement your garden\'s aesthetics while offering protection and boundary definition.',
                image: '/images/gardening_3.jpg',
                rating: 4.6,
                reviews: 75,
                price: 100,
                duration: '4-8 hours',
            },
        ],
    },
    {
        title: 'Electrician',
        description: 'Safe and reliable electrical work is crucial for any home or business. Our skilled electricians provide top-quality services, from wiring to lighting installations, ensuring that your electrical systems function efficiently and safely.',
        subcategories: [
            {
                title: 'Wiring & Rewiring',
                description: 'Outdated wiring can be a safety hazard. We install new wiring or upgrade existing systems to ensure your home or business is powered safely and efficiently.',
                image: '/images/electrician_1.jpg',
                rating: 4.8,
                reviews: 150,
                price: 100,
                duration: '3-6 hours',
            },
            {
                title: 'Lighting Fixture Installation',
                description: 'Brighten up your space with expertly installed lighting. Whether it\'s decorative, security, or energy-efficient LED lighting, we provide tailored solutions to fit your needs.',
                image: '/images/electrician_2.jpg',
                rating: 4.6,
                reviews: 110,
                price: 50,
                duration: '1-3 hours',
            },
            {
                title: 'Circuit Breaker Repair',
                description: 'A faulty circuit breaker can lead to electrical failures or even fires. We inspect, repair, and replace breakers to keep your electrical system running smoothly and safely.',
                image: '/images/electrician_3.jpg',
                rating: 4.7,
                reviews: 95,
                price: 80,
                duration: '2-5 hours',
            },
        ],
    },
    {
        title: 'Plumbing',
        description: 'Leaky pipes, clogged drains, or water heater issues? Our professional plumbing services ensure your home or business runs smoothly without unexpected disruptions. We handle everything from small repairs to complete installations with precision and reliability.',
        subcategories: [
            {
                title: 'Pipes Repair & Installation',
                description: 'Leaky or broken pipes can cause significant damage if left unattended. Our experts repair and install pipes to maintain a smooth and efficient water supply.',
                image: '/images/plumbing_1.jpg',
                rating: 4.5,
                reviews: 130,
                price: 70,
                duration: '2-5 hours',
            },
            {
                title: 'Faucets & Leak Repair',
                description: 'Dripping faucets and leaks can waste water and increase bills. We quickly diagnose and fix leaks, ensuring your plumbing system remains efficient and leak-free.',
                image: '/images/plumbing_2.jpg',
                rating: 4.6,
                reviews: 100,
                price: 50,
                duration: '1-3 hours',
            },
            {
                title: 'Water Heaters Repair & Installation',
                description: 'Enjoy hot water whenever you need it! We install and repair water heaters, ensuring they operate efficiently to provide comfort and convenience.',
                image: '/images/plumbing_3.jpg',
                rating: 4.7,
                reviews: 85,
                price: 150,
                duration: '3-6 hours',
            },
        ],
    },
];

// Sample data for blogs
const blogs = [
    {
        title: 'The Ultimate Home Maintenance Checklist.',
        description: 'A complete guide to essential home maintenance tasks for a safe, efficient, and well-kept home....',
        image: '/images/blog_1.png',
        date: new Date('2025-02-12'),
    },
    {
        title: '5 Common Plumbing Problems and How to Fix Them',
        description: 'Learn to identify and fix common plumbing issues to prevent leaks, clogs, and costly repairs easily....',
        image: '/images/blog_2.png',
        date: new Date('2025-02-11'),
    },
    {
        title: 'Signs Your Home Needs a Plumbing Check-up',
        description: 'Watch for leaks, low water pressure, and strange noises—these signs mean your plumbing needs inspection....',
        image: '/images/blog_3.png',
        date: new Date('2025-02-10'),
    },
    {
        title: 'How to Identify and Fix Common Electrical Issues',
        description: 'Learn to spot faulty wiring, flickering lights, and tripped breakers, and fix them safely....',
        image: '/images/blog_4.png',
        date: new Date('2025-02-09'),
    },
];

// Seed function
const seedDatabase = async () => {
    try {
        await connectDB();

        // Clear existing data
        console.log('Clearing existing data...');
        await Service.deleteMany({});
        await Blog.deleteMany({});
        await Category.deleteMany({});

        // Insert categories
        console.log('Seeding categories...');
        await Category.insertMany(categories);
        console.log(`✓ ${categories.length} categories added`);

        // Insert services
        console.log('Seeding services...');
        await Service.insertMany(services);
        console.log(`✓ ${services.length} services added`);

        // Insert blogs
        console.log('Seeding blogs...');
        await Blog.insertMany(blogs);
        console.log(`✓ ${blogs.length} blogs added`);

        console.log('\n✅ Database seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

// Run seeder
seedDatabase();
