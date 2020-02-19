const mongoose = require('mongoose');
mongoose.pluralize(null);

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    trim: true,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  }
});

const TodoList = mongoose.model('TodoList', todoSchema);
module.exports = TodoList;
