/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.enqueue = function(value) {
  this.storage[this.index] = value;
  this.index += 1;
  return value;
};

Stack.prototype.dequeue = function() {
  if (this.index > 0) {
    this.index -= 1;
    return this.storage[this.index];
  }
};


/**
* Queue Class
*/


function Queue() {
  this.beginning = new Stack();
  this.ending = new Stack();
}

Queue.prototype.enqueue = function(value) {
  this.ending.enqueue(value);
};

Queue.prototype.dequeue = function() {
  if (this.beginning.index === 0) {
    while (this.ending.index > 0) {
      this.beginning.enqueue(this.ending.dequeue());
    }
  }
  return this.beginning.dequeue();
};

module.exports = {Stack: Stack, Queue: Queue};
