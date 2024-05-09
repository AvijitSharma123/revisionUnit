
// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { authenticateUser } = require('../middleware/authMiddleware'); // Import the authenticateUser middleware

// Routes that require authentication
router.post('/', authenticateUser, orderController.placeOrder);
router.get('/:id', authenticateUser, orderController.getOrderById);
router.patch('/:id', authenticateUser, orderController.updateOrderStatus);

module.exports = router;
