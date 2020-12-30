const express = require('express')
const json = require('body-parser').json()
// here I import both the people and pets service because the delete function takes in req.body to define which type of pet is deleted as well as dequeuing the person at the head of the queue. 
const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

// this method returns a cat and dog at the head of the queue. 
router.get('/', (req, res) => {
  const pets = Pets.get(0);
  return res.json(pets).status(200);
})
// this method removes a pet and a person from the head of each queue. 
router.delete('/', json, (req, res) => {
  const { type } = req.body
  Pets.dequeue(type)
  People.dequeue()
  return res.status(200).end()
})

module.exports = router
