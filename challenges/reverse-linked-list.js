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
    this.prev= null;
}

function reverseLinkedList(head) {
    let newHead = head;
    while (newHead) {
        newHead = head.next;
        newHead.prev = head;
    }
    return newHead;

    // let tail = head;
    // let curr = head;
    // let i = 0;
    // while (curr) {
    //     curr = curr.next;
    //     i += 1;
    // }

}


module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
