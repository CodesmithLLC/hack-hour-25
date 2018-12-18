/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  const args = [...arguments]
  console.log(args);

  let arr = args.map(el=>{
    let output = [];
    while(el){
      output.push(el.value);
      el = el.next;
    }
    output = output.reverse().join('');
    output = parseInt(output);
    return output;
  })
  return arr.reduce((a,b)=>a+b);
}

const LL1 = new Node(1);
LL1.next = new Node(2);

const LL2 = new Node(9);
LL2.next = new Node(8);

console.log(addLinkedList(LL1,LL2));



module.exports = {Node: Node, addLinkedList: addLinkedList};
