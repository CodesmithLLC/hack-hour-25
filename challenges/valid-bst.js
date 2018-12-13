/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */
 

function BinaryTree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function validBST(tree, min = -Infinity, max = Infinity) {
  if (tree.value < min || tree.value > max) return false;
  if (tree.left && tree.right) return validBST(tree.left, min, tree.value) && validBST(tree.right, tree.value, max);
  if (tree.right) return validBST(tree.right, tree.value, max);
  if (tree.left) return validBST(tree.left, min, tree.value);
  return true;
}

const node6 = new BinaryTree(6);
const node4 = new BinaryTree(4);
const node10 = new BinaryTree(10);
const node5 = new BinaryTree(5);
const node8 = new BinaryTree(8);
const node16 = new BinaryTree(16);
const node7 = new BinaryTree(7);

node6.left = node4;
node6.right = node10;
node4.right = node5;
node10.left = node8;
node10.right = node16;
node8.right = node7;

console.log(validBST(node6));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
