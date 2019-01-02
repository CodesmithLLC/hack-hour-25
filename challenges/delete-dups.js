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
  const exists = {};
  let LL = head;
  let prev = LL;
  while(LL){
    if(exists[head.value]){
      prev.next = LL.next;
      LL=prev;
    }
    exists[head.value] = 1;
    prev = LL;
    LL=LL.next;
  }
  return LL;
}

module.exports = deleteDups;
