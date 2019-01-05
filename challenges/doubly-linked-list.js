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
  }
  else {
    newNode.prev = this.tail;
    // const temp = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    // this.tail.prev = temp;
  }
};

const ll = new LinkedList();
ll.add(0)
ll.add(1)
ll.add(2)
ll.add(3)
console.log(ll)
/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let currentNode = this.head;
  while (currentNode.val !== val) {
    currentNode = currentNode.next;
  }
  if (currentNode.val === val) {
    currentNode.prev.next = currentNode.next;
    currentNode.next.prev = currentNode.prev;
  }
};
ll.remove(2)
console.log(ll)
module.exports = LinkedList;
