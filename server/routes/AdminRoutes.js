const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');
// const authMiddleware = require('../middleware/auth'); // Optional: Add authentication middleware for admin routes

// Admin registration (if needed)
router.post('/register', AdminController.createAdmin);

// Admin login
router.post('/login', AdminController.authenticateAdmin);

// // Protected route for admin (requires admin authentication)
// router.get('/profile', authMiddleware, (req, res) => {

//   // Access the authenticated admin's profile here if needed
//   res.json({ message: 'Accessed admin profile' });

// });

// Delete an admin (requires admin authentication)
router.delete('/:id', AdminController.deleteAdmin);

// Other admin-related routes (e.g., update admin, list all admins, etc.)

module.exports = router;
