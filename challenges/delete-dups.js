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



function deleteDups(head) {
  // object to keep track of all linked list values
  const values = {};
  // traverse through the linked list
  let current = head;
  while (current.next !== null) {
    if (values.hasOwnProperty(current.value)) {
      values[current.value] += 1;
    } else {
      values[current.value] = 1;
    }
    current = current.next;
  }
  // change values into an array and then filter to see the duplicate values
  const dups = Object.keys(values).filter((el) => {
    if (values[el] > 1) {
      return el;
    }
  });
  // if dups length is 0, return the head
  if (dups.length === 0) {
    return head;
  }
  // otherwise, go and delete the dup nodes
  // reset current to head
  current = head;
  while (current.next !== null) {
    // if current reaches on of the dups, remove it
  }
}

module.exports = deleteDups;
