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
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let prev = this.head;
  let curr = this.head;
  while (curr) {
    if (curr.val === val) {
      if (curr === this.head) {
        this.head = curr.next;
        this.head.prev = null;
      } else if (curr === this.tail) {
        this.tail.prev = null;
        prev.next = null;
        this.tail = prev;
      } else {
        curr.next.prev = prev;
        prev.next = curr.next;
      }
      return;
    }
    prev = curr;
    curr = curr.next;
  }
};

module.exports = LinkedList;
