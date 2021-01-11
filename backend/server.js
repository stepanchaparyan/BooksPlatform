const express = require('express');
const usersRoute = require('./routes/usersRoute');
require('./config/dbConnect')();
const app = express();

// Passing body data
app.use(express.json());

// Routes
app.use('/api/users', usersRoute);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is up and runing ${PORT}`);
});