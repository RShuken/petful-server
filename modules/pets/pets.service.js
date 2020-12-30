const Queue = require('../queue/Queue')
const store = require('../../store')

// this gives pets a linked list for cats and for dogs inside one object. 
const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

// this takes the cats and dogs from the store and adds each to the queue. 
store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// this exports the get and dequeue method for pets. the get() returns the head of the cat and dog queues which is perfect for the adopt page. The dequeue is what happens when the pet gets adopted and it takes the 'type' then based on that will dequeue the correct pet from the head of the queue. 
module.exports = {
  get() {
    const cat = pets.cats.getHead();
    const dog = pets.dogs.getHead();
    return { cat, dog }
  },

  dequeue(type) {
    type === 'cat' ? pets.cats.dequeue() : pets.dogs.dequeue()
  }
}
