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
  const newNode = new Node(val);
  LinkedList.tail.next = newNode;
  newNode.prev = LinkedList.tail;
  // newNode.next = null;
  LinkedList.tail = newNode;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let curr = LinkedList.head;
  let previous = null;
  while (curr) {
    if (curr.val === val) {
      previous.next = curr.next;
      curr.prev = previous;
      return;
    } else {
      previous = curr;
      curr.prev = previous;
      previous.next = curr;
      curr = curr.next;
    }
  }
};

module.exports = LinkedList;
