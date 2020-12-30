const Node = require('./Node');

// initiate the LinkedList class with a null head
class LinkedList {
  constructor() {
    this.head = null;
  }

  // this method creates a new head which is a node then it takes the current head and appends 
  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }


  // this method creates a tail then checks if there is no Node, if not it will create one, with the tail being the head, else it calls the setNextNode method and sets the new node equal to a new node at the previous position. 
  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }

  // this method checks if there is a head, then it calls the removeHead function to remove the head then return the new data. 
  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    if (removedHead.next) {
      this.head = removedHead.next;
    }
    return removedHead.data;
  }
}

module.exports = LinkedList;
