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
  // calculates length of Linked List
  let length = 0;

  if (!head.next) {
    return length;
  } else {
    let currentNode = head;
    length = 1;
    while (currentNode.next) {
      length += 1;
      currentNode = currentNode.next
    }
  }

  // finds and returns the value associated node k
  let count = 0;
  let target = length - k

  if (k > length) return undefined;
  if (k === length) return head.value;

  let current = head;
  while (current.next) {
    count += 1;
    current = current.next;
    if (count === target) {
      return current.value;
    }
  }
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
