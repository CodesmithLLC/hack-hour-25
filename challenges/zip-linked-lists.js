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


let l1 = new LinkedList(1, 2);
let l2 = new LinkedList('A');


function zip(n1, n2) {
  if (n1 === null && n2 === null) return null;
  if (!n1) return n2;
  if (!n2) return n1;
  const n1Next = n1.next;
  n1.next = n2;
  n2.next = zip(n1Next, n2.next);
  return n1;
}

console.log(zip(l1.head, l2.head));
console.log(l1.head.next.next.next)

module.exports = {Node: Node, zip: zip};
