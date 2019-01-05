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
  let newNode = new Node(val);
  let current = this.head;
  while (current.next) {
    current = current.next
  };
  current.next = newNode;
  newNode.prev = current;
  this.tail = newNode;
  return this.head;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (this.head.val === val) {this.head = this.head.next; return this.head}
  let prev = this.head;
  let current = prev.next;
  while (current.val) {
    if (current.val === val) {
      this.prev.next = current.next;
      return this.head;
    };
    prev = prev.next;
    current = current.next;
  }
}; 

module.exports = LinkedList;
