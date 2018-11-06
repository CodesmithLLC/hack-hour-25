
// * Write a function that takes two parameters, an integer and the head of a
 //* singly linked list, and returns the VALUE on the kth to last node in the list.
// *
 const a = new Node('A');
 const b = new Node('B');
 const c = new Node('C');
 const d = new Node('D');
 const e = new Node('E');
 
 a.next = b;
 b.next = c;
 c.next = d;
 d.next = e;
// *
 

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  let count = 0;
  let length = 0;
  let current = head;
  let current1 = head;
  while (current !== null) {
    length += 1;
    current = current.next
  }
  while (length - count !== k) {
//     console.log(current1)
    current1 = current1.next;
    count += 1
  }
  return current1.value
}
console.log(kthToLastNode(2, a));// -> returns 'D' (the value on the second to last node)
module.exports = {Node: Node, kthToLastNode: kthToLastNode};
