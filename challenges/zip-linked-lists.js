/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  const zippedList = [];
  let l1Val;
  let l1Next;
  let l2Val;
  let l2Next;
  for (let i = 0; i < l1.length; i += 1) {
    l1Val = l1[i].value;
    l1Next = l1[i].next;
    l2Val = l2[i].value;
    l2Next = l2[i].next;
    
    if (i === l1.length) {
      l1[i].next = null;
      l2[i].next = null;
      zippedList.push(l1[i]);
      zippedList.push(l2[i]);
    }
    l1[i].next = l2Val;
    l2[i].next = l1Next;
    zippedList.push(l1[i]);
    zippedList.push(l2[i]);
  }
  return zippedList;
};

function buildLinkedList(input) {
  const list = [];
  let node;
  for (let i = input.length - 1; i >= 0; i -= 1) {
    if(list.length === 0) {
      node = new Node(input[i]);
    } else {
      node = new Node(input[i]);
      node.next = input[i + 1];
    }
    list.unshift(node);
  }
  return list;
}

const listOne = buildLinkedList([1, 2, 3, 4, 5]);
const listTwo = buildLinkedList(['a', 'b', 'c', 'd', 'e']);
const zippedList = zip(listOne, listTwo);
// console.log(listOne);
// console.log(listTwo);
console.log(zippedList);

module.exports = {Node: Node, zip: zip};
