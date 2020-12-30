const express = require('express')
const cors = require('cors')
const { CLIENT_ORIGIN } = require('../../config.js');

// declare the app uses express
const app = express()
// cors for all connections
app.use(
  cors({
    origin: CLIENT_ORIGIN,
  })
);
// default route to make sure everything works
app.get('/', (req, res) => {
  res.send('Hello from Petful!');
});
// i have two paths here, one for people and one for pets
app.use('/people', require('../people/people.router'))
app.use('/pets', require('../pets/pets.router'))

module.exports = app
