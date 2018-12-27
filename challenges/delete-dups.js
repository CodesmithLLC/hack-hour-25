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

// awful solution!
// function deleteDups(head) {
//   const values = [];
//   const uniqueList = new LinkedList();
//   let currentNode = head;
//   while (currentNode) {
//     if (!values.includes(currentNode.value)) {
//       values.push(currentNode.value);
//     }
//     currentNode = currentNode.next;
//   }
//   values.forEach((value) => {
//     uniqueList.push(value);
//   });
//   return uniqueList;
// }

//slightly better but still not good
function deleteDups(head) {
  const uniqueList = new LinkedList();
  let currentNode = head;
  while (currentNode) {
    if (!uniqueList.contains(currentNode.value)) {
      uniqueList.push(currentNode.value);
    }
    currentNode = currentNode.next;
  }
  return uniqueList;
}


function LinkedList(...args) {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

LinkedList.prototype.push = function(value) {
  const node = new Node(value);
  if (this.head === null) {
    this.head = node;
    this.tail = node;
  }
  else {
    this.tail.next = node;
    this.tail = node;
  }
}

LinkedList.prototype.contains = function contains(value) {
  let currentNode = this.head;
  while (currentNode !== null) {
    if (currentNode.value === value) return true;
    currentNode = currentNode.next;
  }
  return false;
}

const testList = new LinkedList();
testList.push(0)
testList.push(1)
testList.push(2)
testList.push(2)
testList.push(3)

console.log(deleteDups(testList.head))
module.exports = deleteDups;
