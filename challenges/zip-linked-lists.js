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
  
  // in the case either l1 or l2 is undefined, return the other
  if (l1 === undefined) return l2;
  if (l2 === undefined) return l1;
  
  // initialize variables to start at l1 and l2, respectively
  let l1Curr = l1;
  let l1Tracker = l1;
  let l2Curr = l2;
  let l2Tracker = l2;

  // only iterate through when both l1Curr and l2Curr are defined
  while (l1Curr !== null && l2Curr !== null) {

    // set l1Tracker to hold the next node of l1Curr
    l1Tracker = l1Curr.next;
    l1Curr.next = l2Curr;

    // set l2Tracker to hold the next node of l2Curr
    l2Tracker = l2Curr.next;
    l2Curr.next = l1Tracker;

    // set l1Curr and l2Curr to where the trackers are
    l1Curr = l1Tracker;
    l2Curr = l2Tracker;

  }
  return l1;
};

module.exports = {Node: Node, zip: zip};