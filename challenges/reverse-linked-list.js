/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
	//declare a variable called newList to store the reverse enw list
  let headNode = {...head};
  headNode.next = null
  let newList;
  let newListPointer;
	//set up a while loop to iterate while the head's next is not null
  while (head.next !== null) {
  	let currentNode = head;
  	while (currentNode.next.next !== null) {
      console.log(currentNode)
  	  currentNode = currentNode.next;
  	}
  	if (newList === undefined) {
  		newList = currentNode.next;
  		newListPointer = currentNode.next
      currentNode.next = null;
  	} else {
  		newListPointer.next = currentNode.next
  		newListPointer = newListPointer.next
      currentNode.next = null;

  	}

  }
  let currentNode2 = newList
  while (currentNode2.next !== null) {
    currentNode2 = currentNode2.next;
  }
  currentNode2.next = headNode;

		//set up another while loop to get to the last node, 
		//when we get to the last node, if newList is null, the last node will be the newList, else have the end of new List point to it
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
