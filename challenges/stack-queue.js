/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.storage = [];
    this.index = 0;
}

Stack.prototype.push = function(value) {
    this.storage[this.index] = value;
    this.index += 1;
};
Stack.prototype.pop = function() {
    if (this.index === 0) return undefined;
    const target = this.storage[this.index-1];
    delete this.storage[this.index-1];
    this.index -= 1;
    return target;
}
/**
* Queue Class
*/


function Queue() {
  this.queue = [];
  let stack1 = new Stack;
  let stack2 = new Stack;
  this.queue.push(stack1);
  this.queue.push(stack2);
};

Queue.prototype.enqueue = function(value) {
  this.queue[0].push(value);
};
Queue.prototype.dequeue = function() {
  if (this.queue[1].length === 0) {
    while (this.queue[0] > 0) {
      this.queue[1].push(this.queue[0].pop())
    }
  };
  return this.queue[1].pop();
}
module.exports = {Stack: Stack, Queue: Queue};
