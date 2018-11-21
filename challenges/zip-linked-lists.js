/* Merge two linked lists so that their nodes alternate. Let the first node of the 
  zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper 
 * LinkedList class
 * BONUS: Do this in place
 */
function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  if (l1) {
    let resultList = new Node(l1.val);
    while (l1.next) {
      let temp = l1.next;
      if (l2) {
        let temp2 = l2.next;
      }
      resultList.next = new Node(l2.val);
      l2.next = new Node(temp.val);
      resultList.next.next = temp2;
    }
    return resultList;
  } else if (!l1 && l2) {
    return l2;
  }
  return 'no lists here!';
};

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
a.next = b;
b.next = c;
c.next = d;
d.next = e;

const f = new Node('F');
const g = new Node('G');
const h = new Node('H');
const i = new Node('I');
const j = new Node('J');
f.next = g;
g.next = h;
h.next = i;
i.next = j;

let list1 = new Node(a);
let list2 = new Node(f);

console.log(zip(list1, list2));

module.exports = { Node: Node, zip: zip };
