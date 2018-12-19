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
  // Declare a new linked list to store the return values
  let returnList = new Node(0);
  // Declare variable to store value of current l1 node
  let currentL1 = l1;
  // Declare variable to store value of current l2 node
  let currentL2 = l2;
  // Declare array to store carry value
  const carryArray = [];
  // Declare array to store sums
  const sumsArray = [];
  // Iterate through lists until current.next equals null
  while (currentL1.value !== null || currentL2.value !== null) {
    // Add values from lists and store value to array
    const sum = currentL1.value + currentL2.value;
    if (sum > 9) {
      // If sum is grater than 10, split sum into array, 
      // add index 1 to the array and index 0 to the carry value
      const digits = sum.toString().split('');
      carryArray.push(Number(digits[0]));
      sumsArray.push(Number(digits[0]));
    } else {
      // Else add 0 to the carry array
      carryArray.push(0);
    }
    // Assign current.next to current for each linked list
    currentL1 = currentL1.next;
    currentL2 = currentL2.next;
  }
  // Build the return linked list using the two arrays
  for (let i = 0; i < sumsArray.length; i++) {
    returnList.value = sumsArray[i] + carryArray[i];
    returnList.next = new Node(sumsArray[i + 1] + carryArray[i + 1]);
    returnList = returnList.next;
  }
  return returnList;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
