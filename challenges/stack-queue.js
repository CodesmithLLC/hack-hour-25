/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
	return [];	
}

/**
* Queue Class
*/

function Queue() {
	const stack1 = new Stack();
	const stack2 = new Stack();
	{
		queue: function(element) {
			// add element to end of stack1
			stack1.push(element);
			return element;
		},
		dequeue: function(element) {
			if (stack1.length === 0) return undefined;
			// 'pour' stack1 unto stack2 until the very first element of stack1 is left
			while (stack1.length !== 1 && stack1.length !== 0) {
				stack2.push(stack1.pop());
			}
			// pop the result we want
			const result = stack1.pop();
			// 'pour' stack2 unto stack1
			while (stack2.length !== 1 && stack2.length !== 0) {
				stack1.push(stack2.pop());
			}
			// return element that was dequeued
			return result;
		}
	}
	return stack1;
}

module.exports = {Stack: Stack, Queue: Queue};