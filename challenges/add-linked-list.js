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

function addLinkedList(l1, l2, carry = 0) {
  // if both nodes are valid, add the current values into a node
  if (l1 && l2) {
    let currentSum = l1.value + l2.value + carry;
    carry = 0;
    if (currentSum >= 10) {
      currentSum -= 10;
      carry = 1;
    }
    const newNode = new Node(currentSum);
    newNode.next = addLinkedList(l1.next, l2.next, carry);
    return newNode;
  }
  if (l1) {
    let currentSum = l1.value + carry;
    carry = 0;
    if (currentSum >= 10) {
      currentSum -= 10;
      carry = 1;
    }
    const newNode = new Node(currentSum);
    newNode.next = addLinkedList(l1.next, null, carry);
    return newNode;
  }
  if (l2) {
    let currentSum = l2.value + carry;
    carry = 0;
    if (currentSum >= 10) {
      currentSum -= 10;
      carry = 1;
    }
    const newNode = new Node(currentSum);
    newNode.next = addLinkedList(null, l2.next, carry);
    return newNode;
  }
  if (carry) return new Node(1);
  return null;
}


const num1 = new Node(2);
num1.next = new Node(1);
num1.next.next = new Node(5);

const num2 = new Node(5);
num2.next = new Node(9);
num2.next.next = new Node(2);
num2.next.next.next = new Node(3);

console.log(addLinkedList(num1, num2).next);

/* while loop

function addLinkedList(l1, l2, carrry = false) {
  let str = '';
  let carry = 0;
  let start1 = l1;
  let start2 = l2;
  while (start1 && start2) {
    const currSum = l1.value + l2.value + carry;
    if (currSum > 10) {
      str += currSum - 10;
      carry = 1;
    } else {
      str += currSum;
      carry = 0;
    }
    start1 = start1.next;
    start2 = start2.next;
  }
}
*/


module.exports = { Node, addLinkedList };
