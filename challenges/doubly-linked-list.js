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
LinkedList.prototype.add = function (val) {
  const node = new Node(val);
  let curr = this.head;
  while (curr.next) {
    curr = curr.next;
  }
  curr.next = node;
  node.prev = curr;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  // Iterate through linked list
  let curr = this.head;
  while (curr && curr.val !== val) {
    curr = curr.next;
  }

  // If we encounter the value, remove the node
  if (curr) {
    if (curr === this.head) {
      curr.next.prev = null;
      this.head = curr.next;
    } else {
      curr.prev.next = curr.next;
      // account for removing the tail
      if (curr.next) curr.next.prev = curr.prev;
    }
  }
};


const ll = new LinkedList();
ll.add(3);
ll.add(5);
ll.add(7);
// ll.remove(3);
console.log(ll);

module.exports = LinkedList;