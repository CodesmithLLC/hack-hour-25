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

  // Store Linked List in Object()
  let linkListStorage = {};
  let linkListCounter = 0;    // Keep a counter for total number of nodes
  let currentNode = head;

  // add head before entering while
  linkListStorage[linkListCounter] = currentNode;
  linkListCounter += 1;

  while(currentNode.next !== null && currentNode.next !== undefined) {
    // Set key to num where head = 0 and increment by one for each new node added
    currentNode = currentNode.next;
    linkListStorage[linkListCounter] = currentNode;
    linkListCounter += 1;

  }

  // Once tail identified use total number of nodes minus k to access node Object
  // which will be returned
  return linkListStorage[(linkListCounter - k)].value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
