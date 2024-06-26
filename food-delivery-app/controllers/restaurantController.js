// // controllers/restaurantController.js
// const Restaurant = require('../models/restaurantModel');

// const addRestaurant = async (req, res) => {
//   try {
//     const newRestaurant = await Restaurant.create(req.body);
//     res.status(201).json(newRestaurant);
//   } catch (error) {
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };

// const getAllRestaurants = async (req, res) => {
//   try {
//     const restaurants = await Restaurant.find();
//     res.status(200).json(restaurants);
//   } catch (error) {
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };

// const getRestaurantById = async (req, res) => {
//   try {
//     const restaurant = await Restaurant.findById(req.params.id);
//     if (!restaurant) {
//       return res.status(404).json({ message: 'Restaurant not found' });
//     }
//     res.status(200).json(restaurant);
//   } catch (error) {
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };

// // Implement other controller functions for menu management

// module.exports = {
//   addRestaurant,
//   getAllRestaurants,
//   getRestaurantById,
//   // Add other controller functions here for menu management
// };


// controllers/restaurantController.js
const Restaurant = require('../models/restaurantModel');

const addRestaurant = async (req, res) => {
  try {
    const newRestaurant = await Restaurant.create(req.body);
    res.status(201).json(newRestaurant);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getMenu = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.status(200).json(restaurant.menu);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const addItemToMenu = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    const newItem = req.body;
    restaurant.menu.push(newItem);
    await restaurant.save();
    res.status(201).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateMenuItem = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    const itemId = req.params.itemId;
    const updatedItem = req.body;
    const index = restaurant.menu.findIndex(item => item._id == itemId);
    if (index === -1) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    restaurant.menu[index] = { ...restaurant.menu[index], ...updatedItem };
    await restaurant.save();
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteMenuItem = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    const itemId = req.params.itemId;
    const index = restaurant.menu.findIndex(item => item._id == itemId);
    if (index === -1) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    restaurant.menu.splice(index, 1);
    await restaurant.save();
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  addRestaurant,
  getAllRestaurants,
  getRestaurantById,
  getMenu,
  addItemToMenu,
  updateMenuItem,
  deleteMenuItem
};
































/**
 * These routes and controllers handle operations related to restaurants, including adding a new restaurant, retrieving all restaurants, and retrieving a specific 
 * restaurant by its ID. We've also included placeholders for other menu management operations as per the provided instructions.
 */