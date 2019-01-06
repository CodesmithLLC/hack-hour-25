/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  const node = new Node(val);

  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {

  if (this.head.val === val) {
    const newHead = this.head.next;
    newHead.prev = null;
    this.head = newHead;
  } else {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.val === val) {
        const next = currentNode.next;
        const prev = currentNode.prev;
        prev.next = next;
        next.prev = prev;
      }
      currentNode = currentNode.next;
    }
  }
};

module.exports = LinkedList;
