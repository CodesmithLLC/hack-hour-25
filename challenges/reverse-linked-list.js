/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

LinkedList.prototype.push = function (value) {
  const thisNode = new Node(value);
  if (this.head === null) {
    this.head = thisNode;
    this.tail = thisNode;
  } else {
    this.tail.next = thisNode;
    this.tail = thisNode;
  }
};

function LinkedList(...args) {
  this.head = null;
  this.tail = null;
  for (let i = 0; i < args.length; i += 1) {
    this.push(args[i]);
  }
}

function Node(val) {
  this.value = val;
  this.next = null;
}


let l1 = new LinkedList('A', 'B', 'C', 'D', 'E');
let l2 = new LinkedList('A');

function reverse(head, tail = true) {
  if (head.next) reverse(head.next, false).next = head;
  if (tail) head.next = null;
  return head;
}

function reverseLinkedList(head) {
  if (!head) return head;
  let i = head;
  while (i.next) {
    i = i.next;
  }
  reverse(head);
  return i;
}

/*
function reverseLinkedList(head) {
  const linkArr = [];
  let i = 0;
  let j = head;
  while (j.next) {
    linkArr[i] = j;
    i += 1;
    j = j.next;
  }
  const newHead = j;
  let k = i - 1;
  console.log('linkArr: ', linkArr);
  while (k >= 0) {
    linkArr[i].next = linkArr[k];
    i -= 1;
    k -= 1;
  }
  console.log(i);
  // linkArr[i].next = null;
  return newHead;
}
*/
console.log(reverseLinkedList(l1.head).next.next.next.next);


module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
