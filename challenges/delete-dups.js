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

function Node(value) {
  this.value = value;
  this.next = null;
}

function deleteDups(head) {
  // keeps record of encountered values
  const cache = {};
  // if empty list, exit
  if (!head) return;
  // initialize currentNode as head
  let currentNode = head;
  let prevNode;
  // while currentNode exists, iterate through list
  while (currentNode) {
    // if value is not a duplicate, add it to the cache
    if (!cache[currentNode.value]) {
      cache[currentNode.value] = currentNode.value;
    // if value is a dupliacte, remove from list
    } else {
      if (currentNode.next && currentNode.value === currentNode.next.value) {
        prevNode = currentNode
        while (currentNode.next && currentNode.value === currentNode.next.value) {
          currentNode = currentNode.next
        }
        prevNode.next = currentNode.next;
      } else {
        prevNode.next = currentNode.next
      }
    }
    // re-assignment facilitates iteration
    prevNode = currentNode;
    currentNode = currentNode.next
  }
  return head;
}

const list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(2);
list.next.next.next = new Node(2);
list.next.next.next.next = new Node(5);
list.next.next.next.next.next = new Node(3);

const cleaned = deleteDups(list);

console.log(cleaned);

module.exports = deleteDups;
