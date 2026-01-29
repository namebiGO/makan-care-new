const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Service = require('./models/Service');

// Load environment variables
dotenv.config();

// Service data to seed (converted from mock data)
const servicesData = [
    {
        title: "Gardening",
        image: "/assets/banner_gardening_1.jpg",
        description: "Transform your outdoor space with our expert gardening services! Whether you need regular lawn maintenance, professional tree care, or a complete landscape makeover, we've got you covered. Our team ensures your garden stays lush, vibrant, and pest-free all year round. We use eco-friendly techniques and the latest equipment to enhance your green space, making it both beautiful and functional. From small backyard gardens to large estates, we bring expertise and creativity to every project.",
        subcategories: [
            {
                title: "Lawn Maintenance",
                description: "A well-maintained lawn adds beauty and value to your property. Our services include mowing, fertilizing, aeration, and weed control to keep your grass green and healthy all year.",
                image: "/assets/gardening_1.jpg",
                rating: 4.5,
                reviews: 120,
                price: 50,
                duration: "2-3 hours",
            },
            {
                title: "Tree Care & Pruning",
                description: "Healthy trees enhance your landscape's beauty and provide shade. We offer expert pruning, disease treatment, and removal services to keep your trees thriving.",
                image: "/assets/gardening_2.jpg",
                rating: 4.7,
                reviews: 95,
                price: 80,
                duration: "3-5 hours",
            },
            {
                title: "Landscape Design",
                description: "Create your dream outdoor space with our custom landscape design services. From concept to completion, we transform your vision into reality with creative planning and quality execution.",
                image: "/assets/gardening_3.jpg",
                rating: 4.6,
                reviews: 75,
                price: 100,
                duration: "4-8 hours",
            },
        ],
    },
    {
        title: "Electrician",
        image: "/assets/banner_electrician_1.jpg",
        description: "Safe and reliable electrical work is crucial for any home or business. Our skilled electricians provide top-quality services, from wiring to lighting installations, ensuring that your electrical systems function efficiently and safely. We use high-quality materials and follow the latest industry standards to prevent electrical hazards and improve energy efficiency. Whether you need repairs, upgrades, or new installations, our team is ready to assist you with expertise and professionalism.",
        subcategories: [
            {
                title: "Wiring & Rewiring",
                description: "Outdated wiring can be a safety hazard. We install new wiring or upgrade existing systems to ensure your home or business is powered safely and efficiently.",
                image: "/assets/electrician_1.jpg",
                rating: 4.8,
                reviews: 150,
                price: 100,
                duration: "3-6 hours",
            },
            {
                title: "Lighting Fixture Installation",
                description: "Brighten up your space with expertly installed lighting. Whether it's decorative, security, or energy-efficient LED lighting, we provide tailored solutions to fit your needs.",
                image: "/assets/electrician_2.jpg",
                rating: 4.6,
                reviews: 110,
                price: 60,
                duration: "1-3 hours",
            },
            {
                title: "Electrical Panel Upgrades",
                description: "An outdated electrical panel can limit your power capacity and pose safety risks. We upgrade panels to meet modern electrical demands and ensure compliance with safety codes.",
                image: "/assets/electrician_3.jpg",
                rating: 4.9,
                reviews: 85,
                price: 120,
                duration: "4-6 hours",
            },
        ],
    },
    {
        title: "Plumbing",
        image: "/assets/banner_plumbing_1.jpg",
        description: "Leaky pipes, clogged drains, or water heater issues? Our professional plumbing services ensure your home or business runs smoothly without unexpected disruptions. We handle everything from small repairs to complete installations with precision and reliability. Using high-quality materials and advanced techniques, we deliver long-lasting solutions for all your plumbing needs.",
        subcategories: [
            {
                title: "Pipes Repair & Installation",
                description: "Leaky or broken pipes can cause significant damage if left unattended. Our experts repair and install pipes to maintain a smooth and efficient water supply.",
                image: "/assets/plumbing_1.jpg",
                rating: 4.7,
                reviews: 130,
                price: 70,
                duration: "2-4 hours",
            },
            {
                title: "Drain Cleaning",
                description: "Clogged drains can disrupt your daily routine. We use advanced tools to clear blockages quickly and prevent future issues, ensuring smooth drainage.",
                image: "/assets/plumbing_2.jpg",
                rating: 4.5,
                reviews: 100,
                price: 50,
                duration: "1-2 hours",
            },
            {
                title: "Water Heater Services",
                description: "From installation to repair and maintenance, we keep your water heater running efficiently. Enjoy consistent hot water with our reliable services.",
                image: "/assets/plumbing_3.jpeg",
                rating: 4.8,
                reviews: 90,
                price: 80,
                duration: "2-5 hours",
            },
        ],
    },
];

// Connect to MongoDB and seed data
const seedDatabase = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ MongoDB Connected Successfully');

        // Clear existing services
        await Service.deleteMany({});
        console.log('🗑️  Cleared existing services');

        // Insert new services
        const insertedServices = await Service.insertMany(servicesData);
        console.log(`✅ Successfully seeded ${insertedServices.length} services`);

        // Display inserted services
        insertedServices.forEach(service => {
            console.log(`   - ${service.title} (${service.subcategories.length} subcategories)`);
        });

        console.log('\n✅ Database seeding completed successfully!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
};

// Run the seed function
seedDatabase();
