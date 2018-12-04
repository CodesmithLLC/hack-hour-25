/**
 * Create a stack.Then create a queue using two stacks.
 */

// stack: first in last out; push, pop
function Stack() {
  this.data = [];
  this.length = 0;
  this.push = (e) => {
    this.length += 1;
    this.data.push(e);
  };
  this.pop = () => {
    this.length -= 1;
    return this.data.pop();
  };
}

/**
* Queue Class
*/

// queue: first in first out; enqueue, dequeue
function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
  this.enqueue = e => this.stack1.push(e);
  this.dequeue = () => {
    let times = this.stack1.length;
    for (let i = 0; i < times; i += 1) {
      this.stack2.push(this.stack1.pop());
    }
    const val = this.stack2.pop();
    times = this.stack2.length;
    for (let i = 0; i < times; i += 1) {
      this.stack1.push(this.stack2.pop());
    }
    return val;
  };
}

let queue1 = new Queue();
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
queue1.enqueue(4);
queue1.enqueue(5);
console.log(queue1.dequeue());
console.log(queue1.dequeue());
console.log(queue1.dequeue());
console.log(queue1.dequeue());
console.log(queue1.dequeue());

module.exports = {Stack: Stack, Queue: Queue};
