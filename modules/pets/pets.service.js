const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

module.exports = {
  get() {
    const cat = pets.cats.show();
    const dog = pets.dogs.show();
    return { cat, dog }
  },

  dequeue(type) {
    type === 'cat' ? pets.cats.dequeue() : pets.dogs.dequeue()
  }
}
