/**
 * Write a function that takes two parameters, an integer and the head
 * of a
 * singly linked list, and returns the VALUE on the kth to last node in
 * the list.
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
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last
 * node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

// input: number, head of linked list
// output: value of kth to last node
function kthToLastNode(k, head) {
  // check if this.head.next is equal to null, if so, return -1
  if (!head.next) return -1;
  // while this.next is not equal to null
  // let headNext = head.next;
  let current = head;
  let counter = 0;

  // create object to track key number and whole node as value
  const trackerObj = {};

  while (current) {
    current = current.next;
    counter += 1;
    trackerObj[counter] = current;
  }
  // console.log(trackerObj);
  // return the key.value property of the head - kth node of the trackerObj
  return trackerObj[counter - k].value;
}

// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');
// const e = new Node('E');
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// console.log(a.next);

// console.log(kthToLastNode(2, a));
