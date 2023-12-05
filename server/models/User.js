const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  enteredYear: {
    type: Number,
    required: true,
  },
  passOutYear: {
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  whatsappNumber: {
    type: String,
    required: true,
  },
  studentIdNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  roleOfDegree: {
    type: String,
    required: true,
  },
  position: String,
  extraQualification: String,
  workPlace: String,
  country: String,

// This can be a file path to the uploaded profile photo
  profilePhoto: String, 

// Set to true when admin approves the request
  isApproved: {
    type: Boolean,
    default: false, 
  },

  password: {
    type: String,
    required: true,
  },
});

// Hash the user's password before saving it to the database
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare the entered password with the stored hash
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Generate a JWT token for user authentication
userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    // Token expiration time
    expiresIn: '1h', 
  });
};

const User = mongoose.model('User', userSchema);

module.exports = User;
