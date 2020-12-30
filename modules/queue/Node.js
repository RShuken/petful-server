// define the class Node with the methods for data, next and previous
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }
  // this method will set the next node equal to the arg passed through the function.
  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error('There has been an Error with setting the next Node');
    }
  }
  // this method will return the next node in the list.
  getNextNode() {
    return this.next;
  }
}

module.exports = Node;
