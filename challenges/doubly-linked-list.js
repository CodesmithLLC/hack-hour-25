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

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);


// ll.add(3);
/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function add(val) {
  const newNode = new Node(val);
  if (!this.head) {
    // empty
    this.head = newNode;
  } else {
    // already has 1+ nodes
    let currHead = this.head;
    while (currHead.next) {
      currHead = currHead.next;
    }
    currHead.next = newNode;
    newNode.prev = currHead;
    this.tail = newNode;
  }
};
const ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
console.log(ll);

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function remove(val) {
  let currNode = this.head;
  while (currNode) {
    if (currNode.val === val) {
      if (!currNode.prev) {
        // if it's the first node
        if (!currNode.next) {
          // if first node and no next
          this.head = null;
          this.tail = null;
        } else {
          // if first node and has next
          currNode.next.prev = null;
          this.head = currNode.next;
        }
      } else if (currNode.next) {
        // if it has a next
        currNode.next.prev = currNode.prev;
        currNode.prev.next = currNode.next;
      } else {
        currNode.prev.next = null;
        this.tail = currNode.prev;
      }
      return;
    }
    currNode = currNode.next;
  }
};

module.exports = LinkedList;
