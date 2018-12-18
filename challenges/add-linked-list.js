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
  // edge cases
  if (l1 === null && l2 === null) return undefined;
  if (l1 === null && l2 !== null) return l2;
  if (l2 === null && l1 !== null) return l1;

  let l1Val = '';
  let l2Val = '';
  let l1Curr = l1;
  let l2Curr = l2;
  let result = null;
  
  // loop through and get the 
  while (l1Curr !== null || l2Curr !== null) {
    if (l1Curr !== null) {
      l1Val += l1Curr.value.toString();
      l1Curr = l1Curr.next;
    } 
    if (l2Curr !== null) {
      l2Val += l2Curr.value.toString();
      l2Curr = l2Curr.next;
    }
  }

  // get the sum and turn it into a reversed array
  l1Val = l1Val.split('').reverse().join('') * 1;
  l2Val = l2Val.split('').reverse().join('') * 1;
  let sum = (l1Val + l2Val).toString().split('').reverse();

  let current = null;

  // return the new linked list 
  return sum.map(value => {
    value = value * 1;
    if (result === null) {
      result = new Node(value);
      current = result;
    } else {
      const node = new Node(value);
      current.next = node;
      current = node;
    }
    return current;
  });
}

// const one = new Node(2);
// const two = new Node(1);
// const hi = new Node(5);

// one.next = two;
// two.next = hi;

// const three = new Node(5);
// const four = new Node(9);
// const h = new Node(0);

// three.next = four;
// four.next = h;

// console.log(addLinkedList(one, three))

module.exports = {Node: Node, addLinkedList: addLinkedList};