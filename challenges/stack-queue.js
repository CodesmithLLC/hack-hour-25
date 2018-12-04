/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [];
  this.count = 0;
}

Stack.prototype.push = (val) => {
  this.storage[this.count] = val;
  this.count += 1;
};

Stack.prototype.pop = () => {
  if (this.count === 0) {
    return undefined;
  }
  this.count -= 1;
  return this.storage.pop();
};


/**
* Queue Class
*/


function Queue() {
  this.stack1 = Stack();
  this.stack2 = Stack();
}

Queue.prototype.enqueue = (val) => {
  this.stack1.push(val);
};

Queue.prototype.dequeue = () => {
  if (this.stack2.count === 0) {
    if (this.stack1.count === 0) {
      return 'Error, stacks are empty';
    }
    while (this.stack1.count > 0) {
      let holder = this.stack1.pop();
      this.stack2.push(holder);
    }
  }
  return this.stack2.pop();
};

module.exports = {Stack: Stack, Queue: Queue};
