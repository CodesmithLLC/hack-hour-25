/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 const a = new Node('A');
  const b = new Node('B');
  const c = new Node('C');
  const d = new Node('D');
  const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */
//function LinkList() {
//   this.head = null;
//   this.tail = null;
// }

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  //create a pointer to reference the node 
  //  create a pointer to keep track of the currentNode
  // delcare a count to track the index of the node
  // iterate over the nodes check if the head exist
  // if true: reassign node to the next node 
  // increment count by 1
  // outside the loop: check if k is equal to the 

  let node = head;
  let follow = head;
  let count = 0;

  while (node !== null) {

    if (count === k) {
      follow = head.value
    }
    return value;


  }


}

module.exports = { Node: Node, kthToLastNode: kthToLastNode };

let newNode = new Node();

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode())