
// routes/restaurantRoutes.js
const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');
const { authenticateUser } = require('../middleware/authMiddleware'); // Import the authenticateUser middleware

// Routes that require authentication
router.post('/', authenticateUser, restaurantController.addRestaurant);
router.get('/', authenticateUser, restaurantController.getAllRestaurants);
router.get('/:id', authenticateUser, restaurantController.getRestaurantById);
router.get('/:id/menu', authenticateUser, restaurantController.getMenu);
router.post('/:id/menu', authenticateUser, restaurantController.addItemToMenu);
router.put('/:id/menu/:itemId', authenticateUser, restaurantController.updateMenuItem);
router.delete('/:id/menu/:itemId', authenticateUser, restaurantController.deleteMenuItem);

module.exports = router;
