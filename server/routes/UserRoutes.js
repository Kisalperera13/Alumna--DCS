const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const authMiddleware = require('../middleware/auth'); // Optional: Add authentication middleware

// User registration
router.post('/register', UserController.createUser);

// User login
router.post('/login', UserController.authenticateUser);

// Protected route that requires authentication
router.get('/profile', authMiddleware, UserController.getUserProfile);

// Update user profile (protected route)
router.put('/profile',authMiddleware, UserController.updateUserProfile);

// Delete user account (protected route)
router.delete('/profile',authMiddleware, UserController.deleteUserProfile);



module.exports = router;
