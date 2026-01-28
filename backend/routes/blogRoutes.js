const express = require('express');
const router = express.Router();
const {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog,
} = require('../controllers/blogController');

// Public routes
router.get('/', getAllBlogs);
router.get('/:id', getBlogById);

// Admin routes (for now, no authentication middleware)
router.post('/', createBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);

module.exports = router;
