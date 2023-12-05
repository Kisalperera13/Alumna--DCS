const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Function to create a new admin
async function createAdmin(adminData) {
  try {
    const admin = new Admin(adminData);
    await admin.save();
    return admin;
  } catch (error) {
    throw error;
  }
}

// Function to delete an admin by their ID
async function deleteAdmin(adminId) {
  try {
    const deletedAdmin = await Admin.findByIdAndRemove(adminId);
    return deletedAdmin;
  } catch (error) {
    throw error;
  }
}

// Function to authenticate admin by checking username and password
async function authenticateAdmin(username, password) {
  try {
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return null; // Admin not found
    }

    const isPasswordValid = await admin.comparePassword(password);

    if (!isPasswordValid) {
      return null; // Invalid password
    }

    return admin;
  } catch (error) {
    throw error;
  }
}

// Function to generate a JWT token for admin authentication
function generateAdminAuthToken(admin) {
  return jwt.sign({ _id: admin._id }, process.env.JWT_SECRET, {
    expiresIn: '1h', // Token expiration time
  });
}

module.exports = {
  createAdmin,
  deleteAdmin,
  authenticateAdmin,
  generateAdminAuthToken,
};

