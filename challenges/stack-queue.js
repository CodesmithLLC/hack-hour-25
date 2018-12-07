/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.storage = [];
  this.index = 0;
}

Stack.prototype.push = function (val) {
  this.storage.push(val);
  this.index += 1;
};

Stack.prototype.pop = function () {
  this.index -= 1;
  return this.storage.pop(this.index - 1);
};

const newStack = new Stack();
newStack.push(4);
newStack.push(5);
console.log(newStack.storage);
console.log('newStack.pop();: ', newStack.pop());
console.log(newStack.storage);
console.log(Object.keys(newStack));


/**
* Queue Class
*/


function Queue() {

}

module.exports = {Stack: Stack, Queue: Queue};
