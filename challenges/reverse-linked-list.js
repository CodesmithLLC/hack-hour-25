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

function reverseLinkedList(head, oldParentNode = head, curNode, tail = head) {

  // console.log('Top');
  // console.log(`oldParentNode: ${JSON.stringify(oldParentNode)}`);  
  // console.log(`curNode: ${JSON.stringify(curNode)}`);  

  // Edge Case: when head is null
  if (head == null) return head;

  // assign only after edge case for null head passed
  curNode = tail.next;

  // Base Case: when curNode is null end of list
  if (curNode == null) return oldParentNode;

  // build new list
  tail.next = curNode.next;
  curNode.next = oldParentNode;

  // Get new parent
  return reverseLinkedList(head, curNode, tail.next, tail);
}

// initialize
// let a = new Node('a');
// let b = new Node('b');
// let c = new Node('c');
// let d = new Node('d');

// assign
// a.next = b;
// b.next = c;
// c.next = d;

// console.log(`Head: ${JSON.stringify(a)}`);

// reverse
// console.log(`New Head: ${JSON.stringify(reverseLinkedList(a))}`);

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
