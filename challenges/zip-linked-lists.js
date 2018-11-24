/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */
// adds node to end of list
LinkedList.prototype.push = function (value) {
  const thisNode = new Node(value);
  if (this.head === null) {
    this.head = thisNode;
    this.tail = thisNode;
  } else {
    this.tail.next = thisNode;
    this.tail = thisNode;
  }
};

function LinkedList(...args) {
  this.head = null;
  this.tail = null;
  for (let i = 0; i < args.length; i += 1) {
    this.push(args[i]);
  }
}

function Node(val) {
  this.value = val;
  this.next = null;
}


let l1 = new LinkedList(1, 2, 3);
let l2 = new LinkedList(4, 5);


function zip(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  let i = l1;
  let j = i.next;
  let x = l2;
  let y = x.next;
  while (x && j) {
    i.next = x;
    x.next = j;
    i = j;
    j = j.next;
    x = y;
    if (!y) return;
    y = y.next;
  }
  if (x) i.next = x;
};

console.log(zip(l1.head, l2.head));
console.log(l1.head.next.next.next.next)

module.exports = {Node: Node, zip: zip};
