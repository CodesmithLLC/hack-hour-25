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
  let curr = head;
  let prev = null;
  const obj = {};
  if (curr.next === null) return curr;
  while (curr) {
    if (!obj.hasOwnProperty(curr.value)) {
      obj[curr.value] = 0;
      prev = curr;
      curr = curr.next;
    } else {
      prev.next = curr.next;
      curr = curr.next;
    }
  }
  return curr;
}

module.exports = deleteDups;
