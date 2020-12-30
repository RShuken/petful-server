const Queue = require('../queue/Queue');
const store = require('../../store');
const people = new Queue();

// this is the store for the dummy user names, I found a large array on github with all the names. 
store.people.forEach((person) => people.enqueue(person));



module.exports = {
  //method to return the head of the queue. 
  get() {
    return people.getHead();
  },
  //method to return all nodes in the queue. 
  getAll() {
    return people.all();
  },
  // this method will add a person to the tail of the queue. 
  enqueue(person) {
    return people.enqueue(person);
  },
  // this method will remove a node from the head of the queue. 
  dequeue() {
    return people.dequeue();
  },
};
