/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function (val) {
  let node = new Node(val)
  if(!this.head ) { this.head = node; this.tail = node;
  return;
  }
let currNode = this.head;
// console.log('hi',this.head)
// console.log(currNode)
  while (currNode.next) {
  
currNode = currNode.next;
  }
  currNode.next = node;
  this.tail = node;
  node.prev = currNode
  // console.log('end', currNode)
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {

  // check if head even exist 
  if(!this.head) return;

if(this.head.value === value){
  this.head = this.head.next;
  if(!this.head) this.tail = null;
  return;
}


};

let double = new LinkedList();
double.add(8)
double.add(1)
double.add(2)
console.log(double)

module.exports = LinkedList;

