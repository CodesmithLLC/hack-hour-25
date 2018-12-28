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
	let cache = {}
	cache[head.value] = 1
	pointer = head.next
	second_pointer = head
	while (pointer !== null) {
        console.log(cache, "pointer value: " + pointer.value)
    if (pointer.next !== null && cache.hasOwnProperty
    (pointer.value)) {
      console.log(cache)
				second_pointer.next = pointer.next;
			} else if (pointer.next === null && cache.hasOwnProperty
    (pointer.value)) {
        console.log('hi')
        second_pointer.next = null;}
		cache[pointer.value] = 1;

		pointer = pointer.next;
		second_pointer = second_pointer.next;
  }
	return head
}

module.exports = deleteDups;
