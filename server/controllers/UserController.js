const UserService = require('../services/UserService');
const jwt = require('jsonwebtoken');

async function createUser(req, res) {
  try {
    const userData = req.body;

    // Check if the email already exists in the database
    const emailExists = await UserService.isEmailAlreadyRegistered(userData.email);

    if (emailExists) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // If the email is not found in the database, create a new user
    const user = await UserService.createUser(userData);

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user: ' + error });
  }
}

// Function to authenticate a user
async function authenticateUser(req, res) {
  try {
    
    const {email, password} = req.body;
    const user = await UserService.authenticateUser(email, password);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = UserService.generateUserAuthToken(user);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error authenticating user' + error });
  }
}


// Get user profile
async function getUserProfile(req, res) {
  try {
    const userId = req.user._id; // Get the user ID from the authenticated user

    // Fetch the user profile information
    const userProfile = await UserService.findUserById(userId);

    if (!userProfile) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Remove sensitive information (e.g., password) before sending the response
    const { password, ...userProfileWithoutPassword } = userProfile.toObject();

    res.json(userProfileWithoutPassword);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching user profile' });
  }
}




// Update user profile
async function updateUserProfile(req, res) {
  try {
    const userId = req.user._id; // Get the user ID from the authenticated user
    const newData = req.body; // Data to update

    const updatedUser = await UserService.updateUser(userId, newData);

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating user profile' });
  }
}

// Delete user profile
async function deleteUserProfile(req, res) {
    try {
      const userId = req.user._id; // Get the user ID from the authenticated user
  
      const deletedUser = await UserService.deleteUser(userId);
  
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error deleting user profile' });
    }
  }

  //write other user functions

module.exports = {
  createUser,
  authenticateUser,
  deleteUserProfile,
  updateUserProfile,
  getUserProfile

  // Export other user-related functions as needed
};
