// interview cake solution

class Queue {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  enqueue(item) {
    this.inStack.push(item);
  }

  dequeue() {
    if (this.outStack.length === 0) {
      // move items from inStack to outStack, reversing order
      while (this.inStack.length > 0) {
        let itemToAdd = this.inStack.pop();
        this.outStack.push(itemToAdd);
      }
      // if outStack is still empty, raise an error
      if (this.outStack.length === 0) {
        throw new Error("Can't dequeue from empty queue!")
      }
    }
    return this.outStack.pop();
  }
}


/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index += 1;
};

Stack.prototype.pop = function() {
  // const keys = Object.keys(this.storage);
  // if (keys.length < 1) return undefined;

  // let lastVal = this.storage[keys.length - 1];
  // delete this.storage[keys.length - 1];
  // this.index -= 1;
  // return lastVal;

  if (Object.keys(this.storage).length < 1) return undefined;

  let lastVal = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  this.index -= 1;
  return lastVal;
};

// const newStack = new Stack();
// newStack.push(1);
// newStack.push(2);
// newStack.push(3);
// newStack.pop();
// console.log(newStack);


/**
* Queue Class
*/


function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
}

Queue.prototype.enqueue = function(value) {
  this.stack1.push(value);
} 

Queue.prototype.dequeue = function() {
  while(this.stack1.index) {
    this.stack2.push(this.stack1.pop());
  }
  let firstVal = this.stack2.pop();
  return firstVal;
};

const newQueue = new Queue;
newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.dequeue();


console.log(newQueue);


module.exports = {Stack: Stack, Queue: Queue};
