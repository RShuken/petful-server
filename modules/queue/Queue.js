const LinkedList = require('./LinkedList');

class Queue {
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  enqueue(data) {
    if (this.hasRoom()) {
      this.queue.addToTail(data);
      this.size++;
    } else {
      throw new Error('The Queue is now full');
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      const data = this.queue.removeHead();
      this.size--;
      return data;
    } else {
      throw new Error('The Queue is now empty');
    }
  }

  getHead() {
    if (!this.isEmpty()) {
      return this.queue.head.data;
    } else {
      return null;
    }
  }

  all() {
    let queueArray = [];
    if (!this.isEmpty()) {
      let currentNode = this.queue.head;
      while (currentNode) {
        queueArray.push(currentNode.data);
        currentNode = currentNode.next;
      }
      return queueArray;
    } else {
      return null;
    }
  }
}

module.exports = Queue;
