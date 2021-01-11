const express = require('express');
const error = require('./middlewares/errorMiddlewarehandler');
const usersRoute = require('./routes/usersRoute');
require('./config/dbConnect')();
const app = express();

// Passing body data
app.use(express.json());

// Routes
app.use('/api/users', usersRoute);

// error middleware
app.use(error.errorMiddlewareHandler);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is up and runing ${PORT}`);
});