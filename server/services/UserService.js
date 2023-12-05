const User = require('../models/User');
const jwt = require('jsonwebtoken');


class UserService {

    // Create a new user
    static async createUser(userData) 
    {
        try {
            const user = new User(userData);
            await user.save();
            return user;
        } catch (error) {
            throw error;
        }
    }

    // Find a user by their email address can add any
    static async findUserByEmail(email) {
        try {
            const user = await User.findOne({ email });
            return user;
        } catch (error) {
            throw error;
        }
    }

    //Check a user email already existance
    static async isEmailAlreadyRegistered(email) {
        try {
          const existingUser = await User.findOne({ email });
          return !!existingUser; // Return true if user exists, false if not
        } catch (error) {
          console.error(error);
          throw error; // Throw any database error for handling in the calling code
        }
      }



    // Find a user by their ID
    static async findUserById(userId) {
        try {
            const user = await User.findById(userId);
            return user;
        } catch (error) {
            throw error;
        }
    }


    // Get a list of all users (can add  filtering as needed)
    static async getAllUsers() {
        try {
            const users = await User.find();
            return users;
        } catch (error) {
            throw error;
        }
    }


    // Update user details
    static async updateUser(userId, newData) {
        try {
            const updatedUser = await User.findByIdAndUpdate(userId, newData, { new: true });
            return updatedUser;
        } catch (error) {
            throw error;
        }
    }


    // Delete a user
    static async deleteUser(userId) {
        try {
            const deletedUser = await User.findByIdAndRemove(userId);
            return deletedUser;
        } catch (error) {
            throw error;
        }
    }

  // Authenticate user by checking email and password
  static async authenticateUser(email, password) {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        // User not found
        return null; 
      }

      const isPasswordValid = await user.comparePassword(password);

      if (!isPasswordValid) {
        // Invalid password
        return null; 
      }

      return user;
    } catch (error) {
      throw error;
    }
  }

  // Generate a JWT token for user authentication
  static generateUserAuthToken(user) {
    return jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h', // Token expiration time
    });
  }

}
module.exports = UserService;
