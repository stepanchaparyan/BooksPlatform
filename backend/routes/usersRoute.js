const express = require('express');
const userRouter = express.Router();
const User = require('../models/User');
const asyncHandler = require('express-async-handler'); 
const generateToken = require('../utils/generateToken');

// Register
userRouter.post('/register', asyncHandler (async (req, res) => {
  const { name, email, password } = req.body;
  
  const userExist = await User.findOne({ email: email });
  if (userExist) {
    throw new Error('User Exist');
  };
  const userCreated = await User.create({ email, name, password });

  res.json({
    _id: userCreated._id,
    name: userCreated.name,
    password: userCreated.password,
    email: userCreated.email,
    token: generateToken(userCreated._id),
  });
}));

// Login
userRouter.post('/login', asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (user && await user.isPasswordMatch(password)) {
    res.status(200);
    res.json({
      _id: user._id,
      name: user.name,
      password: user.password,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid credentails');
  }
}));

// Update user
userRouter.put('/update', (req, res) => {
  res.send('Update route');
});

// Delete user
userRouter.delete('/:id', (req, res) => {
  res.send('Delete route');
});

// Fetch users
userRouter.get('/', (req, res) => {
  res.send('Fetch route');
});

module.exports = userRouter;