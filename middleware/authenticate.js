const jwt = require('jsonwebtoken');
const User = require('../Models/User'); // Assuming you have a User model

module.exports = async (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.userId); // Assuming your User model has _id field

    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};