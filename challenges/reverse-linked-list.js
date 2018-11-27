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
  if (head === null) return;
  let c1 = head;
  let c2 = head.next;
  if (c2 === null) {
    return c1;
  }
  let holder = c2.next;
  c1.next = null;
  c2.next = c1;
  while (holder !== null) {
    c1 = c2;
    c2 = holder;
    holder = holder.next;
    c2.next = c1;
  }
  return c2;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
