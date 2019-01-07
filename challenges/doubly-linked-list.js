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
// eslint-disable-next-line func-names
LinkedList.prototype.add = function (val) {
  // Instanciate a new node
  const node = new Node(val);

  // If there is not a head...
  if (!this.head) {
    // Set the new node as the head and tail
    this.head = node;
    this.tail = node;
  } else {
    // Set prev of the new node to the tail
    node.prev = this.tail;
    // Set the next of the tail to the new node
    this.tail.next = node;
    // Set the tail to the new node
    this.tail = node;
  }
};

/*
Removes the first node with the inputed value
 */
// eslint-disable-next-line func-names
LinkedList.prototype.remove = function (val) {
  // Declare a current node and set it to the head node
  let currentNode = this.head;
  // Iterate through linked list while the current node is not null
  while (currentNode) {
  // Check current node value against input value
    if (currentNode.val === val) {
      // If the input value equals the head and tail
      if (currentNode === this.head && currentNode === this.tail) {
        // Set the head and tail to null
        this.head = null;
        this.tail = null;
      } else if (currentNode === this.head) {
        // If the input value equals the head
        this.head = currentNode.next;
        currentNode.next.prev = null;
      } else if (currentNode === this.tail) {
        // If the input value equals the tail
        this.tail = currentNode.prev;
        currentNode.prev.next = null;
      } else {
        // Set current.prev.next to current.next
        currentNode.prev.next = currentNode.next;
        // Set current.next.prev to current.prev
        currentNode.next.prev = currentNode.prev;
      }
    }
    currentNode = currentNode.next;
  }
};

const myList = new LinkedList();
myList.add(5);
myList.add(4);
myList.add(3);
myList.add(2);
myList.remove(2);

console.log(myList);


module.exports = LinkedList;
