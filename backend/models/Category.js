const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    value: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    label: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Category', categorySchema);
