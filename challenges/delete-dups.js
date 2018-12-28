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
  // Declare a variable to track the previous node
  let previousNode = null;
  // Declare a variable to track the current node
  let currentNode = head;
  // Declare an array to track the encountered node values
  const values = [];

  // Use a while loop to iterate through the list until it reaches the end
  while (currentNode) {
    // Check if the current value exists in the array
    if (values.indexOf(currentNode.value) === -1) {
      // If it doesn't exist, push the value to the array
      values.push(currentNode.value);
    } else {
      // If the value exists in the array,
      // set the previous.next value to the
      // current.next value
      previousNode.next = currentNode.next;
    }
    // Set the previous node to the current node
    previousNode = currentNode;
    // Set the current node to the current.next node
    currentNode = currentNode.next;
  }
  // Return the list
  return head;
}

module.exports = deleteDups;
