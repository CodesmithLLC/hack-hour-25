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
  const args = [...arguments];
  console.log(args);

  //for each arg, parse the linked list into a readable number
  let arr = args.map(el => {
    let output = [];
    while (el) {
      output.push(el.value);
      el = el.next;
    }
    output = output.reverse().join("");
    output = parseInt(output);
    return output;
  });

  //sum each arg together
  output = arr.reduce((a, b) => a + b);

  //reverse in preparation for linked listifying
  output = output
    .toString()
    .split("")
    .reverse();

  //create new array where each one is its own node
  let LL = output.map(el => {
    return new Node(el);
  });

  //set head
  const outputLL = LL[0];

  //link rest of list
  LL.reduce((a, b) => {
    a.next = b;
    return a.next;
  }, outputLL);

  return outputLL;
}

// let ll1 = new Node(1);
// ll1.next = new Node(2);

// let ll2 = new Node(9);
// ll2.next = new Node(8);

// console.log(addLinkedList(ll1,ll2))

module.exports = { Node: Node, addLinkedList: addLinkedList };
