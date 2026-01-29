const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false // Allow guest orders
    },
    customerInfo: {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        }
    },
    serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true
    },
    serviceDetails: {
        serviceName: {
            type: String,
            required: true
        },
        subcategoryName: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        duration: {
            type: String,
            required: true
        }
    },
    scheduledDate: {
        type: Date,
        required: true
    },
    address: {
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: String,
        fullAddress: String
    },
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'In Progress', 'Completed', 'Cancelled'],
        default: 'Pending'
    },
    statusHistory: [{
        status: {
            type: String,
            enum: ['Pending', 'Confirmed', 'In Progress', 'Completed', 'Cancelled']
        },
        timestamp: {
            type: Date,
            default: Date.now
        },
        note: String
    }],
    paymentStatus: {
        type: String,
        enum: ['Pending', 'Paid', 'Refunded'],
        default: 'Pending'
    },
    totalAmount: {
        type: Number,
        required: true
    },
    notes: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
});

// Generate unique order ID before saving
orderSchema.pre('save', async function (next) {
    if (!this.orderId) {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const random = Math.floor(Math.random() * 999999).toString().padStart(6, '0');
        this.orderId = `MK-${year}${month}-${random}`;
    }

    // Add initial status to history if not exists
    if (this.statusHistory.length === 0) {
        this.statusHistory.push({
            status: this.status,
            timestamp: new Date(),
            note: 'Order created'
        });
    }

    next();
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
