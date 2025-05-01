import * as authService from '../services/authService.js';
import asyncHandler from 'express-async-handler';

export const register = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  const user = await authService.registerUser(username, email, password);
  res.status(201).json({
    _id: user._id,
    username: user.username,
    email: user.email,
    token: authService.generateToken(user._id),
  });
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUser(email, password);
  res.json({
    _id: user._id,
    username: user.username,
    email: user.email,
    token: authService.generateToken(user._id),
  });
});

export const getMe = asyncHandler(async (req, res) => {
  const user = await authService.getUserById(req.user.id);
  res.json({
    _id: user._id,
    username: user.username,
    email: user.email,
  });
});