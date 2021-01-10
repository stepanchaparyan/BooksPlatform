const mongoose = require('mongoose');

const dbConnect = () => {
  mongoose.connect('mongodb+srv://user1:pNPzt7QomRoZgolo@cluster0.4ncz4.mongodb.net/booksPlatform', {
  useFindAndModify: true,
  useUnifiedTopology: true,
  useCreateIndex:true,
  useNewUrlParser: true,
})
.then(() => console.log('DB Connected'))
.catch(err => console.log(err))
};

module.exports = dbConnect;