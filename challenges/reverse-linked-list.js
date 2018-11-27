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

function reverseLinkedList(head) {
  if (head === undefined || head.next === undefined ) return undefined;

  let newHead = head, newTail = head, temp;

  while (newTail.next !== null) {
    temp = newTail.next;
    newTail.next = newTail.next.next;
    temp.next = newHead;
    newHead = temp;
  }

  return newHead;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
