const express = require('express');
const userRoutes = express.Router();
const User = require('../models/User');
const asyncHandler = require('express-async-handler'); 

// Register
userRoutes.post('/register', asyncHandler (async (req, res) => {
  const { name, email, password } = req.body;
  
  const userExist = await User.findOne({ email: email });
  if (userExist) {
    throw new Error('User Exist');
  };
  const userCreated = await User.create({ email, name, password });
  res.send(userCreated);
}));

// Login
userRoutes.post('/login', asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (user) {
    // set status code
    res.status(200);

    res.json({
      _id: user._id,
      name: user.name,
      password: user.password,
      email: user.email,
    })
  } else {
    res.status(401);
    throw new Error('Invalid credentails');
  }
}));

// Update user
userRoutes.put('/update', (req, res) => {
  res.send('Update route');
});

// Delete user
userRoutes.delete('/:id', (req, res) => {
  res.send('Delete route');
});

// Fetch users
userRoutes.get('/', (req, res) => {
  res.send('Fetch route');
});

module.exports = userRoutes;