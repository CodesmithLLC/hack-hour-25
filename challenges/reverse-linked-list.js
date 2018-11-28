import { reverse } from "dns";

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
  // return undefined if head is not defined
  if (head === undefined || head === null || head.next === null) return head;

  // set the current to head and hold the following node
  let curr = head;
  let hold = head.next;

  // set head's next to null because it will be the tail
  head.next = null;
  let save = hold.next;

  // iterate through until linked list has been reversed
  while (hold !== null) {
    save = hold.next; 
    hold.next = curr;
    curr = hold;
    hold = save;
  }

  // return new head (former tail)
  return curr;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};