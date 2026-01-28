const express = require('express');
const router = express.Router();
const {
    getAllCategories,
    createCategory,
} = require('../controllers/categoryController');

// Public routes
router.get('/', getAllCategories);

// Admin routes (for now, no authentication middleware)
router.post('/', createCategory);

module.exports = router;
