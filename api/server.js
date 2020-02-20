const express = require('express');
const api = express();
const session = require('express-session');
const mongoose = require('mongoose');

const UsersList = require('./userModel');
const TodoList = require('./todoModel');

//? Connecting with MongoDB Atlas:
const multiUserTodoDB =
  'mongodb+srv://dbMultipleUserToDo:solitom@multiusertodoapplication-ehiv6.gcp.mongodb.net/test?retryWrites=true&w=majority';

mongoose
  .connect(multiUserTodoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDb Atlas connected'));

//? Allow cross origin access from frontend:
api.use((req, res, next) => {
  res.set('ACCESS-CONTROL-ALLOW-ORIGIN', 'http://localhost:5000');
  res.set('ACCESS-CONTROL-ALLOW-CREDENTIALS', 'true');
  res.set(
    'ACCESS-CONTROL-ALLOW-HEADERS',
    'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
  );
  res.set(
    'ACCESS-CONTROL-ALLOW-METHODS',
    'GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS'
  );
  next();
});

//? Routes:
api.get('/', (req, res, next) => {
    console.log(`Home route called`);
    res.send(`Home`)
})

const port = 3000;
api.listen(port, () => console.log(`Listening on port ${port}`));