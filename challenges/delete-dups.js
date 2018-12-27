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
    let current = head;
    while (current.value) {
        let prev = current;
        let compare = current.next;
        let next = compare.next
        while (next.value) {
            if (current.value === compare.value) {
                prev.next = next
                compare = prev.next;
                next = compare.next;
            }
            prev = prev.next;
            compare = compare.next;
            next = next.next;
        }
        current = compare
    }
    return head;
}

module.exports = deleteDups;
