/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
  this.value = value;
  this.next = null;
}

function reverseLinkedList(head, newHead) {
  this.newHead;
  this.newTail;
  // base case
  // if there is no head, return the new linked list
  if (!head) return this.newHead;
  // go through the linked list and grab the last link
  let lastVal;
  let current = head;
  while (current.next !== null) {
    lastVal = current.value;
    current = current.next;
  }
  // if there is no newHead yet, assign it with the first value, which is the last node
  if (!this.newHead) {
    this.newHead = new Node(lastVal);
    // recurse
    delete current;
    reverseLinkedList(head, this.newHead);
  } else {
    this.newTail = new Node(lastVal);
    // recurse
    delete current;
    reverseLinkedList(head, this.newTail);
  }
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
