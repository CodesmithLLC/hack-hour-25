/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function deleteDups(head) {
  // base case if there's only one node return the node
  if (!head.next) return head;

  // helper to add a node into already unique ll
  function sortIntoUniqueLL(node, llHead) {
    let currVal = node.value;
    let unique = true;
    let toCompare = llHead;
    while (toCompare) {
      if (currVal === toCompare.value) unique = false;
      toCompare = toCompare.next;
    }
    if (unique) {
      node.next = llHead;
      return node;
    }
    return llHead;
  }
  return sortIntoUniqueLL(head, deleteDups(head.next));
}

const n1 = new Node(1);
n1.next = new Node(2);
n1.next.next = new Node(3);
n1.next.next.next = new Node(3);
n1.next.next.next.next = new Node(4);
n1.next.next.next.next.next = new Node(2);

console.log(deleteDups(n1.next));
module.exports = deleteDups;
