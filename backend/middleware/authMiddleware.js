import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user information to request object
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token is not valid' });
  }
};