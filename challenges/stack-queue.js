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
}

Stack.prototype.pop = function() {
  const output = this.storage[this.index];
  delete this.storage[this.index];
  this.index -= 1;
  return output;
}

/**
* Queue Class
*/


function Queue() {

  this.stackOne = new Stack();

  this.stackTwo = new Stack();

  this.queued = true;


}

Queue.prototype.enqueue = function(value) {
  if (this.stackOne.index === 0 && this.stackOne.index === 0) {
    this.stackOne.push(value);
  } else if (this.stackTwo.index === 0) {
    this.stackOne.push(value);
  } else {
    this.stackTwo.push(value);
  }
  
  this.queued = true;
}

Queue.prototype.dequeue = function() {


  
  this.queued = false;
}

const line = new Queue;

line.enqueue('hi');
line.enqueue('hello');
line.enqueue('aloha');

console.log(line)

module.exports = {Stack: Stack, Queue: Queue};
