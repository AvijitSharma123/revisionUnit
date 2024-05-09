// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const config = require('../config/config');

const authenticateUser = (req, res, next) => {
  // Check for token in headers
  const token = req.headers.authorization;

  // Verify token
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, config.secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Failed to authenticate token' });
    }
    req.userId = decoded.userId;
    next();
  });
};

module.exports = { authenticateUser };














































































/**
 * This middleware function authenticateUser checks if the request contains a valid JWT token in the Authorization header.
 *  If the token is valid, it extracts the user ID from the token payload and adds it to the request object (req.userId). 
 * If the token is invalid or missing, it returns an appropriate error response.

we can then use this middleware to protect routes that require authentication by adding it as middleware to those routes.
 */