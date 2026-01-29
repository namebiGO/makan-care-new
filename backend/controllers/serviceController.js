const Service = require('../models/Service');
const mongoose = require('mongoose');

// Get all services
const getAllServices = async (req, res) => {
    try {
        // Check if MongoDB is connected
        if (mongoose.connection.readyState !== 1) {
            return res.status(200).json({
                success: true,
                data: [],
                message: 'Database not connected. Returning empty services list.',
            });
        }

        const services = await Service.find({ isActive: true });
        res.status(200).json({
            success: true,
            data: services,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching services',
            error: error.message,
        });
    }
};

// Get service by ID
const getServiceById = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service) {
            return res.status(404).json({
                success: false,
                message: 'Service not found',
            });
        }
        res.status(200).json({
            success: true,
            data: service,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching service',
            error: error.message,
        });
    }
};

// Get service by title
const getServiceByTitle = async (req, res) => {
    try {
        const service = await Service.findOne({
            title: { $regex: new RegExp('^' + req.params.title + '$', 'i') },
            isActive: true
        });
        if (!service) {
            return res.status(404).json({
                success: false,
                message: 'Service not found',
            });
        }
        res.status(200).json({
            success: true,
            data: service,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching service',
            error: error.message,
        });
    }
};

// Create a new service
const createService = async (req, res) => {
    try {
        const service = await Service.create(req.body);
        res.status(201).json({
            success: true,
            data: service,
            message: 'Service created successfully',
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error creating service',
            error: error.message,
        });
    }
};

// Update a service
const updateService = async (req, res) => {
    try {
        const service = await Service.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!service) {
            return res.status(404).json({
                success: false,
                message: 'Service not found',
            });
        }
        res.status(200).json({
            success: true,
            data: service,
            message: 'Service updated successfully',
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error updating service',
            error: error.message,
        });
    }
};

// Delete a service (soft delete)
const deleteService = async (req, res) => {
    try {
        const service = await Service.findByIdAndUpdate(
            req.params.id,
            { isActive: false },
            { new: true }
        );
        if (!service) {
            return res.status(404).json({
                success: false,
                message: 'Service not found',
            });
        }
        res.status(200).json({
            success: true,
            message: 'Service deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting service',
            error: error.message,
        });
    }
};

module.exports = {
    getAllServices,
    getServiceById,
    getServiceByTitle,
    createService,
    updateService,
    deleteService,
};
