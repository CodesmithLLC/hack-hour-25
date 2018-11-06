/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  // have an array to hold the values of the index and node
  const memory = [];
  // have a current node tracker
  // have it set to the node that is passed in as an argument
  let currentNode = head;
  // go through the linked list with a function to recursively add the nodes to the memory array
  function traverse(cNode) {
    // first, add the node into memory array
    memory.push(cNode.value);
    // base case
    // if the currentNode does not have a next, then return
    if (cNode.next === null) {
      return;
    }
    // recurse
    return traverse(cNode.next);
  }
  // run the recursive function
  traverse(currentNode);
  // go to the last index of the array, go back k number of nodes and return that node's value
  return memory[memory.length - k];
}

// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');
// const e = new Node('E');
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// console.log(kthToLastNode(3, a));


module.exports = {Node: Node, kthToLastNode: kthToLastNode};
