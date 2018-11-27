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

function reverseLinkedList(head, parent) {
    // delcare a placeholder
    let result = parent || {};
    // check if head exist
    if (head) {
        // if true: delcare new node and set it equal to the next node 

        let child = head.next;
        // let head.next equal to parent 
        head.next = parent
        result = reverseLinkedList(child, head)
    }
    return result;
}

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
