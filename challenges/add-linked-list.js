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
  // let num1 = '';
  // let num2 = '';
  let currentNode1 = l1.head;
  let num1 = (currentNode1.value).toString();
  let currentNode2 = l2.head;
  let num2 = (currentNode2.value).toString();
  while (currentNode1.next && currentNode2.next) {
    if (l1) {
      currentNode1 = currentNode1.next;
      num1 += currentNode1.value; 

    }
    if (l2) {
      currentNode2 = currentNode2.next;
      num2 += currentNode2.value;
    }
  }
  // console.log(num1)
  // console.log(num2)
  const l3Values = (Number(num1) + Number(num2)).toString().split('');
  console.log(l3Values)
  // const l3 = new Node(l3Values[l3Values.length - 1]);
  // for (let i = l3Values.length - 1; i >= 0; i -= 1) {
  //   let l3 = new Node(l3Values[i])
  // }
  let i = l3Values.length - 1;
  const l3 = new Node(Number(l3Values[i]));
  let l3Next = l3;
  console.log(l3Next)
  console.log(l3)
  while (i > 0) {
    i -= 1;
    l3Next.next = new Node(Number(l3Values[i]))
    l3Next = l3Next.next;
    // l3Next.next = l3Next;
    console.log(l3)
    // l3Current = l3Current.next;
  }
  return l3;
}
// function LinkedList(...args) {
//   this.head = null;
//   this.tail = null;
// }
// LinkedList.prototype.push = function(value) {
//   const node = new Node(value);
//   if (this.head === null) {
//     this.head = node;
//     this.tail = node;
//   }
//   else {
//     this.tail.next = node;
//     this.tail = node;
//   }
// }

// const l1 = new LinkedList();
// const l2 = new LinkedList();

// l1.push(2)
// l1.push(1)
// l1.push(5)
// l2.push(5)
// l2.push(9)
// l2.push(2)

// console.log(addLinkedList(l1, l2))
module.exports = {Node: Node, addLinkedList: addLinkedList};
