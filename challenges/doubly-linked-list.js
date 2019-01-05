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
 *
 *  Adds a node to the end of the list
 */
LinkedList.prototype.add = function (val) {
  const newNode = new Node(val);
  // check if head is null
  if (this.head === null) {
    // if null create new node with val and assign to head & tail
    this.head = newNode;
    this.tail = this.head;
  } else if (this.head === this.tail) {
    // if not null append to end of list using this.tail
    // be sure to check if this.tail & this.head are the same
    this.head.next = newNode;
    this.tail = this.head.next;
    this.head.next.prev = this.head;
  } else {
    const temp = this.tail;
    this.tail = newNode;
    temp.next = this.tail;
    this.tail.prev = temp;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  // iterate thru list
  let curNode = this.head;
  while (curNode !== null) {
    // if curNode.val = val then remove
    if (curNode.val === val) {
      // console.log('Found val', curNode);
      // check if curNode is head & tail
      if (curNode === this.head && curNode === this.tail) {
        this.head = null;
        this.tail = null;
      } else if (curNode === this.head) {
        // check if curNode is head
        this.head = this.head.next;
        this.head.prev = null;
      } else if (curNode === this.tail) {
        // check if curNode is tail
        this.tail = this.tail.prev;
        this.tail.next = null;
      } else {
        const temp = curNode.next;
        temp.prev = curNode.prev;
        curNode.prev.next = temp;
        curNode.prev = null;
        curNode.next = null;
      }
      break;
    }
    // advance
    curNode = curNode.next;
  }
};

module.exports = LinkedList;
