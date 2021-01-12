const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
  return jwt.sign({id: userId}, process.env.MONGO_DB_URL, {
    expiresIn: '30d',
  });
};

module.exports = generateToken;