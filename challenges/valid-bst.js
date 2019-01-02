/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */

function BinaryTree(val) {
  this.value = val;
  this.left = 'butt';
  this.right = 'butt';
}

function validBST(tree) {
  if (tree.left === 'butt' && tree.right === 'butt') {
      console.log('end case: '+tree.value)
    return tree.value;
  }
  return (validBST(tree.left) < tree.value && tree.value < validBST(tree.right));
}

// const BST = new BinaryTree(5);
// BST.left = new BinaryTree(3);
// BST.right = new BinaryTree(7);
// BST.left.left = new BinaryTree(1);
// BST.left.right = new BinaryTree(4);
// BST.right.left = new BinaryTree(6);
// BST.right.right = new BinaryTree(8);

// // console.log(BST);

console.log(validBST(BST));

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
