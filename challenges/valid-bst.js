/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */
 
 /* DO AGAIN */

// function BinaryTree(val) {
//     this.value = val;
//     this.left = null;
//     this.right = null;
// }

// function validBST(tree, ancestors = []) {
//   if (tree === null) return true;
//   else if (tree.left === null && tree.right === null) return true; 
//   else if (tree.left !== null && tree.left.value > tree.value) {
//     return false;
//   }
//   else if (tree.right !== null && tree.right.value < tree.value) {
//     return false;
//   }

//   if (ancestors.length === 0) ancestors.push(tree.value);
//   else if (tree.left !== null && tree.left.value > ancestors[0]) {
//     console.log('here')
//     return false;
//   }
//   else if (tree.right !== null && tree.right.value < ancestors[ancestors.length - 1]) {
//     console.log(tree.right.value)
//     console.log(ancestors[ancestors.length - 1])
//     return false; 
//   }
//   else ancestors.push(tree.value);

//   const leftValid = validBST(tree.left, ancestors);
//   const rightValid = validBST(tree.right, ancestors);

//   return (leftValid && rightValid);
// }

// module.exports = {BinaryTree: BinaryTree, validBST: validBST};

// const h = new BinaryTree(5);
// const l = new BinaryTree(2);
// const ll = new BinaryTree(3);

// l.right = ll;
// h.left = l;

// console.log(validBST(h))