const mongoose = require('mongoose');
mongoose.pluralize(null);


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    trim: true
  },
  password: {
    type: String
  }
});

const UsersList = mongoose.model('UsersList', userSchema);
module.exports = UsersList;
