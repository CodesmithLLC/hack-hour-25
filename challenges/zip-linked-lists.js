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

const l1 = {'head': 
            {'value': 'a',
              'next': {
                'value': 'c',
                'next' : {
                  'value': 'e',
                  'next' : null
                }
              }
            }
          }

const l2 = {'head': 
            {'value': 'b',
              'next': {
                'value': 'd',
                'next' : {
                  'value': 'f',
                  'next' : null
                }
              }
            }
            }

function zip(l1, l2) {
  const newLL = new Node(null);
  if (l1.head.value !==  null) newLL.head = 
  let newLLPrev = newLL.head;

  let newLLCurr = l1.head;
  let l1Curr = l1.head;
  let l2Curr = l2.head;
  let l1NextVal = l1Curr.next;
  let l2NextVal = l2Curr.next;

  while (l1Curr){
    newLL.next = l2Curr;
    l2Curr = l2Curr.next;
    newLLCurr = newLL.next;
  }
  return newLL;
};

console.log(zip(l1, l2))
module.exports = {Node: Node, zip: zip};
