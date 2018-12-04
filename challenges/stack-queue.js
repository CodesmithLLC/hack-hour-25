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
    this.stack1 = new Stak()
    this.stack2 = new Stak()
  }
  enqueue(val){
    this.stack1.push(val);
  }
  dequeue(){
    const length = this.stack1.array.length
    for(let i = 0; i<length; i+=1){
      this.stack2.push(this.stack1.pop());
      
    }
    const output = this.stack2.pop();
    for(let i = 0; i<length-1; i+=1){
      this.stack1.push(this.stack2.pop());
    }
    return output;
  }
}

const q = new Quee();
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();

const Stack = new Stak();
const Queue = new Quee();


module.exports = { Stack: Stack, Queue: Queue };
