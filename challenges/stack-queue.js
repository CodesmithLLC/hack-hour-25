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
  if (this.index > 0) {
    const popped = this.storage[this.index - 1];
    delete this.storage[this.index - 1];
    this.index -= 1;
    return popped;
  }
};

const stack1 = new Stack();
const stack2 = new Stack();

stack1.push(0);
stack2.push('A');



/**
* Queue Class
*/


function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
}

Queue.prototype.enqueue = function(value) {
  stack1.push(value);
}

Queue.prototype.dequeue = function() {
  while (stack1.length > 1) {
    const popped = stack1.pop();
    stack2.push(popped);
  };
  return stack1;
}

// const testStack1 = new Stack();
// const testStack2 = new Stack();

// testStack1.push(0);
// testStack1.push(1);
// testStack1.push(2);
// testStack2.push('A');
// testStack2.push('B');
// testStack2.push('C');

// const testQueue = new Queue(testStack1, testStack2);


module.exports = {Stack: Stack, Queue: Queue};
