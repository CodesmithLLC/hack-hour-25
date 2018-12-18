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
  let digits = [];
  while (l1 || l2) {
    if (!l1) l1 = new Node(0);
    if (!l2) l2 = new Node(0);
    digits.push(l1.value + l2.value);
    l1 = l1.next;
    l2 = l2.next;
  }
  for (let i = 0; i < digits.length; i += 1) {
    if (digits[i] >= 10) {
      digits[i] -= 10;
      if (!digits[i + 1]) {
        digits[i + 1] = 0;
      }
      digits[i + 1] += 1;
    }
  }
  let beginning;
  let prev;
  let curr;
  for (let i = 0; i < digits.length; i += 1) {
    if (i === 0) {
      beginning = new Node(digits[i]);
      prev = beginning;
    } else {
      curr = new Node(digits[i]);
      prev.next = curr;
      prev = curr;
    }
  }
  return beginning;
}

const a = new Node(9);
const b = new Node(9);
const c = new Node(9);

const d = new Node(9);
// const e = new Node(9);
// const f = new Node(9);

a.next = b;
b.next = c;

// d.next = e;
// e.next = f;

let g = addLinkedList(a,d);
while (g) {
  console.log(g.value);
  g = g.next;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
