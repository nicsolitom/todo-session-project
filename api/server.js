const express = require('express');
const api = express();
const session = require('express-session');
const mongoose = require('mongoose');

const usersList = require('./userModel');

const multiUserTodoDB =
  'mongodb+srv://dbMultipleUserToDo:solitom@multiusertodoapplication-ehiv6.gcp.mongodb.net/test?retryWrites=true&w=majority';

mongoose
  .connect(multiUserTodoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDb Atlas connected'));
