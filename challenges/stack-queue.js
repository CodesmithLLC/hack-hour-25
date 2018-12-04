/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  const arr = [];
  return {
    push: (e) => {
      arr.push(e)
      return ;
    },
    pop: () => {
      return arr.pop();
    }
  } 
}

/**
* Queue Class
*/

function Queue() {
  let stack1 = new Stack,
      stack2 = new Stack;
  return {
    enqueue: (e) => {
      stack1.push(e);
    },
    dequeue: () => {
    	let e;
    	while(true) {
	    	e = stack1.pop()
    		if (e === undefined) {
    			break
    		}
  			stack2.push(e)
		  }
			let res = stack2.pop()
    	while(true) {
	    	e = stack2.pop()
    		if (e === undefined) {
    			break
    		}
  			stack1.push(e)
		  }
      return res
    }
	}
}

module.exports = {Stack: Stack, Queue: Queue};
