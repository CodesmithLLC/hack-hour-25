/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  // if l1 doesn't exist, return l2 and vice versa
  if (!l1) return l2;
  if (!l2) return l1;

  let currentNode1 = l1;
  let currentNode2 = l2;
  // boolean to keep track of carry, outside of the while-loop to persist state
  let output;
  let currentNodeOut;
  // hold sum of each node combination
  let sum;
  // keep track of digit carry
  let carry;
  // iterate through linked lists
  while (currentNode1 || currentNode2) {
    let val1 = currentNode1.value;
    let val2 = currentNode2.value;

    sum = val1 + val2;
    // reslolve carry 
    if (carry) {
      sum += 1;
      carry = false;
    }
    // handle carry
    if (sum > 9) {
      sum = sum - 10;
      carry = true;
    }
    // create new node
    let newNode = new Node(sum);
    // if output has no nodes, assign first node
    if (!output) {
      output = newNode;
      currentNodeOut = output;
    }

    currentNodeOut.next = newNode;
    currentNodeOut = currentNodeOut.next

    currentNode1 = currentNode1.next;
    currentNode2 = currentNode2.next;
  }
  // if lists are exhausted and a final carry exists, add additional node
  if (carry) {
    carry = false;
    let newNode = new Node(1);
    currentNodeOut.next = newNode;
  }

  return output
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
