/**
 * Create a stack.Then create a queue using two stacks.
 */

// STACK IS LAST IN, FIRST OUT 
// QUEUE IS FIRST IN, LAST OUT
// DELCARE TO STACK ARRAYS 
// CHECK IF S2 IS FILLED 
// IF SO  
function Stack() {
    this.items = [];
  }
  
  Stack.prototype.push = function(item) {
    this.items.push(item);
  };
  
  Stack.prototype.pop = function() {
    return this.items.pop();
  };
  
  Stack.prototype.isEmpty = function() {
    return this.items.length;
  };
  
  function Queue() {
    this.in = new Stack();
    this.out = new Stack();
  }
  
  Queue.prototype.enqueue = function(item) {
    this.in.push(item);
  };
  
  Queue.prototype.dequeue = function() {
    if (this.out.isEmpty()) {
      while (!this.in.isEmpty()) {
        this.out.push(this.in.pop());
      }
    }
    return this.out.pop();
  };
module.exports = { Stack: Stack, Queue: Queue };
