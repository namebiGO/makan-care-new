const Category = require('../models/Category');

// Get all categories
const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find({ isActive: true });
        res.status(200).json({
            success: true,
            data: categories,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching categories',
            error: error.message,
        });
    }
};

// Create a new category
const createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json({
            success: true,
            data: category,
            message: 'Category created successfully',
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error creating category',
            error: error.message,
        });
    }
};

module.exports = {
    getAllCategories,
    createCategory,
};
