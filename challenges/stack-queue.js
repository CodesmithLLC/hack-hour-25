/**
 * Create a stack.Then create a queue using two stacks.
 */

class Stak {
  constructor() {
    this.array = [];
  }

  push(val){
    this.array.push(val);
  };

  pop() {
    return this.array.pop();
  };
}

/**
 * Queue Class
 */

class Quee {
  constructor(){
    this.array = []
  }
  enqueue(val){
    this.array.push(val);
  }
  dequeue(){
    return this.array.shift();
  }
}

const Stack = new Stak;
const Queue = new Quee;

module.exports = { Stack: Stack, Queue: Queue };
