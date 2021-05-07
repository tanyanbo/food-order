const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/food-order', {
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
