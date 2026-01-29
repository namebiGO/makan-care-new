const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Order = require('./models/Order');

// Load environment variables
dotenv.config();

// Sample test order data
const testOrder = {
    customerInfo: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+971501234567'
    },
    serviceId: new mongoose.Types.ObjectId(), // You'll need to replace this with an actual service ID
    serviceDetails: {
        serviceName: 'Gardening',
        subcategoryName: 'Lawn Mowing',
        price: 150,
        duration: '2 hours'
    },
    scheduledDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    address: {
        street: '123 Palm Street',
        city: 'Dubai',
        state: 'Dubai',
        zipCode: '12345',
        country: 'UAE',
        fullAddress: '123 Palm Street, Dubai, UAE 12345'
    },
    status: 'Confirmed',
    paymentStatus: 'Paid',
    totalAmount: 150,
    notes: 'Please bring your own equipment'
};

const createTestOrder = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ MongoDB Connected Successfully');

        const order = new Order(testOrder);
        await order.save();

        console.log('\n✅ Test order created successfully!');
        console.log('📋 Order Details:');
        console.log(`   Order ID: ${order.orderId}`);
        console.log(`   Customer: ${order.customerInfo.name}`);
        console.log(`   Email: ${order.customerInfo.email}`);
        console.log(`   Phone: ${order.customerInfo.phone}`);
        console.log(`   Service: ${order.serviceDetails.serviceName} - ${order.serviceDetails.subcategoryName}`);
        console.log(`   Status: ${order.status}`);
        console.log(`   Total: AED ${order.totalAmount}`);
        console.log('\n🔍 Use this information to test order tracking:');
        console.log(`   Order ID: ${order.orderId}`);
        console.log(`   Email: ${order.customerInfo.email}`);
        console.log(`   OR Phone: ${order.customerInfo.phone}`);

        process.exit(0);
    } catch (error) {
        console.error('❌ Error creating test order:', error);
        process.exit(1);
    }
};

createTestOrder();
