const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  // Get the token from the request headers
  const token = req.header('x-auth-token'); // You can customize the header name

  // Check if the token is missing
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach the user object to the request for use in routes
    next(); // Call the next middleware or route handler
  } catch (error) {
    res.status(401).json({ message: 'Invalid token.' });
  }
}

module.exports = authMiddleware;
