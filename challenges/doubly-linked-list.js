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
  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else if (this.head === this.tail) {
    this.head.next = node;
    node.prev = this.head;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
  return this;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (this.head === null) return undefined;

  let current = this.head;
  let prev;
  while (current !== null) {
    if (current.val === val) {
      prev = current.prev;
      prev.next = current.next;
      return this;
    }
  }
  return this;
};

module.exports = LinkedList;

// const ll = new LinkedList();
// const one = new Node(1);
// const two = new Node(2);
// const three = new Node(3);

// ll.add(one);
// ll.add(two);

// console.log(ll)