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
  res.send(`Home`);
});

api.get('/seed', async (req, res, next) => {
  const seedingUsers = [
    {
      name: 'Sleepyhead',
      email: 'sleep@test.me',
      password: 'sleep123'
    },
    {
      name: 'Dreamer',
      email: 'dream@test.me',
      password: 'dream123'
    },
    {
      name: 'Awoken',
      email: 'wakeup@test.me',
      password: 'wakeup123'
    },
    {
      name: 'Creator',
      email: 'create@test.me',
      password: 'create123'
    }
  ];

    const seedingTodos = [
      {
        title: 'Sleep',
        description: 'Sleeping to recharge the body.',
        status: true
      },
      {
        title: 'Dream',
        description: 'Dream for a balanced psyche.',
        status: true
      },
      {
        title: 'Dance to wake up.',
        description: 'Soul needs dance!',
        status: true
      },
      {
        title: 'Create stuff',
        description:
          'Creation in inspirational flow. What is a life without creativity?!',
        status: true
      }
    ];

  seedingUsers.map(user => {
    new UsersList({
      name: user.name,
      email: user.email,
      password: user.password
    }).save((err, data) => {
      if (err) {
        return console.log(err);
      }
      console.log(`Data: ${data}`);

    });
  });

  console.log(`Seed route called`);
  res.send(`Seed route`);
});

const port = 3000;
api.listen(port, () => console.log(`Listening on port ${port}`));
