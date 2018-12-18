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

const setLinkedList = (value) => {
  let newLinkedList;
  let currentNode;

  // turn value into string array and reverse
  const numArray = String(value).split('').reverse();

  console.log(numArray);

  // iterate thru array till end
  for (let i = 0; i < numArray.length; i += 1) {
    // build node for each element
    if (i === 0) {
      // head node
      newLinkedList = new Node(numArray[i]);
      currentNode = newLinkedList;
    } else {
      // all other values
      currentNode.next = new Node(numArray[i]);
      currentNode = currentNode.next;
    }
  }

  // return new linked list
  return newLinkedList;
}

const getLinkedList = (linkedList) => {
  let val = '';
  let current = linkedList;

  // iterate thru list
  while(current) {
    // concat values to the left until done
    val = String(current.value) + val;
    current = current.next;
  }
  // convert string to number and return
  return Number(val);
}

function addLinkedList(l1, l2) {
  // get value of l1
  // get value of l2
  // performa addition
  const sum = getLinkedList(l1) + getLinkedList(l2);

  console.log(sum);
  
  // store value to linked list
  // return new linked list
  return setLinkedList(sum);
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
