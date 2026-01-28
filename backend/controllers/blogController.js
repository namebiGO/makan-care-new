const Blog = require('../models/Blog');

// Get all blogs
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({ isPublished: true }).sort({ date: -1 });
        res.status(200).json({
            success: true,
            data: blogs,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching blogs',
            error: error.message,
        });
    }
};

// Get blog by ID
const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({
                success: false,
                message: 'Blog not found',
            });
        }
        res.status(200).json({
            success: true,
            data: blog,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching blog',
            error: error.message,
        });
    }
};

// Create a new blog
const createBlog = async (req, res) => {
    try {
        const blog = await Blog.create(req.body);
        res.status(201).json({
            success: true,
            data: blog,
            message: 'Blog created successfully',
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error creating blog',
            error: error.message,
        });
    }
};

// Update a blog
const updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!blog) {
            return res.status(404).json({
                success: false,
                message: 'Blog not found',
            });
        }
        res.status(200).json({
            success: true,
            data: blog,
            message: 'Blog updated successfully',
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error updating blog',
            error: error.message,
        });
    }
};

// Delete a blog (soft delete)
const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(
            req.params.id,
            { isPublished: false },
            { new: true }
        );
        if (!blog) {
            return res.status(404).json({
                success: false,
                message: 'Blog not found',
            });
        }
        res.status(200).json({
            success: true,
            message: 'Blog deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting blog',
            error: error.message,
        });
    }
};

module.exports = {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog,
};
