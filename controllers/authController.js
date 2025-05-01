import * as authService from '../services/authService.js';
import asyncHandler from 'express-async-handler';

export const register = asyncHandler(async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await authService.registerUser(username, email, password);
    res.status(201).json({
      message: 'User created successfully',
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export const login = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await authService.loginUser(email, password);
    res.json({
      token: authService.generateToken(user._id),
    });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

export const getMe = asyncHandler(async (req, res) => {
  try {
    const user = await authService.getUserById(req.user.id);
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});