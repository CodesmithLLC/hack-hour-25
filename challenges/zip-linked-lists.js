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
  let link1 = l1;
  const output = link1;
  let link2 = l2;

  while (link1) {
    //value to hold the list in place
    let l1hold;
    let l2hold = link2;

    //set placeholder equal to the next from the current node
    l1hold = link1.next;

    link1.next = link2;

    l2hold = link2.next;

    link1.next.next = l1hold;

    link1 = link1.next.next;
    link2 = l2hold;

    if (!link1 && link2) {
      link1 = link2;
      break;
    }
    if (link1 && !link2) {
      break;
    }
  }
  return output;
}


module.exports = { Node: Node, zip: zip };
