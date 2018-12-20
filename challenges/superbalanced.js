/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree, depth = 0, maxDepth = 0, result = true ) {
  // increment depth
  depth += 1;

  console.log(`cur: ${tree.value}, depth: ${depth}, max: ${maxDepth}, result: ${result}`);

  // Base Case: if end of left branch
  if (tree.left === null){
    console.log('End of Left');
    // keep track of deepest height
    if (depth >= maxDepth) maxDepth = depth;
    // compare current height against deepest
    // if difference more than one then return false
    if (Math.abs(maxDepth - depth) > 1) result = false;
  } else {
    // Go left as deep as possible
    superbalanced(tree.left, depth, maxDepth, result);
  }
  console.log(`LEFT depth: ${depth}, max: ${maxDepth}, result: ${result}`);
   
  // Base Case: if end of right branch
  if (tree.right === null){
    console.log('End of Right');
    // keep track of deepest height
    if (depth >= maxDepth) maxDepth = depth;
    // compare deepest right height
    // if difference more than one then return false
    if (Math.abs(maxDepth - depth) > 1) result = false;
  } else {
    // Go right as deep as possible
    superbalanced(tree.right, depth, maxDepth, result);
  }
  console.log(`RIGHT depth: ${depth}, max: ${maxDepth}, result: ${result}`);
  
  // return result
  return result;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
