const express = require('express');
const json = require('body-parser').json();
// the router takes in the services created
const People = require('./people.service');
// declare router to use express router
const router = express.Router();

// default get for the people router that returns the first person in the queue.
router.get('/', (req, res) => {
  const person = People.get();
  return res.json(person).status(200);
});

// second get request that returns all people in the queued list. 
router.get('/people_list', (req, res) => {
  let people = People.getAll();
  return res.json(people).status(200);
});

// post request that adds a new person to the tail of the queue. 
router.post('/', json, (req, res) => {
  const { person } = req.body;
  People.enqueue(person);
  res.status(200).end();
});

module.exports = router;
