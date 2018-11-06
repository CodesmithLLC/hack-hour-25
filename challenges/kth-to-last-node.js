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

function kthToLastNode(k, head) {
  // check edge case if k === 0 ;
  if (k < 0) return undefined
	let currentNode = head
  //count the length of the list;
	let length = 0
	do {
		length ++;
		currentNode = currentNode.next
	} while (currentNode.next)
  numberOfIteration = length - k + 1;
   // check edge case if k is larger than length of list, return undefined;
  if (numberOfIteration < 0) {return undefined}
  let targetNode = head;
  // retrieve the value of target by traversing the list 
  while (numberOfIteration > 0 ) {
    numberOfIteration --;
    targetNode = targetNode.next;
  } 
  return targetNode.value
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
