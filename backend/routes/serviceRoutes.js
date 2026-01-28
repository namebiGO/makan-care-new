const express = require('express');
const router = express.Router();
const {
    getAllServices,
    getServiceById,
    getServiceByTitle,
    createService,
    updateService,
    deleteService,
} = require('../controllers/serviceController');

// Public routes
router.get('/', getAllServices);
router.get('/id/:id', getServiceById);
router.get('/title/:title', getServiceByTitle);

// Admin routes (for now, no authentication middleware)
router.post('/', createService);
router.put('/:id', updateService);
router.delete('/:id', deleteService);

module.exports = router;
