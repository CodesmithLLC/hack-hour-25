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
      prevNode.next = currentNode.next
    }
    // re-assignment facilitates iteration
    prevNode = currentNode;
    currentNode = currentNode.next
  }
  return head;
}

module.exports = deleteDups;
