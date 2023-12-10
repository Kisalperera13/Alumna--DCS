const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Optional: Enable CORS if needed
const userRoutes = require('./routes/UserRoutes');
const adminRoutes = require('./routes/AdminRoutes');

const app = express();
const PORT = process.env.PORT || 3001;


require('dotenv').config();

// Optional: Enable CORS to allow cross-origin requests
app.use(cors());

// Parse JSON request bodies
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

 //Define routes
 app.use('/users', userRoutes);
 app.use('/admin', adminRoutes);
 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
