const LinkedList = require('./LinkedList');
// define the class for the Queue with three methods, queue, maxSize, and size. This will allow us to enqueue and dequeue as needed. 
class Queue {
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  // this is an important helper method that allows us to check if the queue is empty, the other functions add value to the size as the queue grows. 
  isEmpty() {
    return this.size === 0;
  }
  // this helper method allows us check to make sure there is room in the queue. In this instance there will always be room since the maxSize is set to Infinity!
  hasRoom() {
    return this.size < this.maxSize;
  }
  // very useful method that adds to the tail of the queue, this called in the pets and people service to add to the queue. 
  enqueue(data) {
    if (this.hasRoom()) {
      this.queue.addToTail(data);
      this.size++;
    } else {
      throw new Error('The Queue is now full, but should not be since the max size is infinity, breaking physics left and right!');
    }
  }
  // this method checks if list is empty then removes a node from the head of the queue, then reduces the size of the list. 
  dequeue() {
    if (!this.isEmpty()) {
      const data = this.queue.removeHead();
      this.size--;
      return data;
    } else {
      throw new Error('The Queue is now empty');
    }
  }
  // this method returns the head of the queue, this is super useful for getting the dog and cat that we want to adopt. 
  getHead() {
    if (!this.isEmpty()) {
      return this.queue.head.data;
    } else {
      return null;
    }
  }
  // this method returns all nodes in a list, it is how I get the list of people waiting to adopt a pet. It first checks if the list is empty then it uses an array to store each node in the list until there is no longer a current node, then it returns the array with all nodes in it. 
  all() {
    let allElementsInQueue = [];
    if (!this.isEmpty()) {
      let currentNode = this.queue.head;
      while (currentNode) {
        allElementsInQueue.push(currentNode.data);
        currentNode = currentNode.next;
      }
      return allElementsInQueue;
    } else {
      return null;
    }
  }
}

module.exports = Queue;
