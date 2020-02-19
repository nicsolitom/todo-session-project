const mongoose = require('mongoose');

const userSchema = new.mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const UsersList = mongoose.model('UsersList', userSchema);
module.exports = UsersList;
