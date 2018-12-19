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

const tree6 = new BinaryTree(6);
const tree4 = new BinaryTree(4);
const tree8 = new BinaryTree(8);
const tree3 = new BinaryTree(3);
const tree1 = new BinaryTree(1);

tree6.left = tree4;
tree6.right = tree8;
tree4.left = tree3;
// tree3.left = tree1;
tree8.right = tree1;


console.log(superbalanced(tree6));

// function height(tree) {
//   if (tree.left && tree.right) {
//     return 1 + Math.max(height(tree.left), height(tree.right));
//   }
//   if (tree.left) {
//     return 1 + height(tree.left);
//   }
//   if (tree.right) {
//     return 1 + height(tree.right);
//   }
//   return 1;
// }

function superbalanced(tree) {
  function height(tree) {
    if (tree.left && tree.right) {
      return 1 + Math.max(height(tree.left), height(tree.right));
    }
    if (tree.left) {
      return 1 + height(tree.left);
    }
    if (tree.right) {
      return 1 + height(tree.right);
    }
    return 1;
  }
  if (!tree.left && !tree.right) return true;
  if (!tree.left && height(tree.right) > 1) return false;
  if (!tree.right && height(tree.left) > 1) return false;
  if (Math.abs(height(tree.left) - height(tree.right)) > 1) return false;
  function validBST(tree, min = -Infinity, max = Infinity) {
    if (tree.value < min || tree.value > max) return false;
    if (tree.left && tree.right) return validBST(tree.left, min, tree.value) && validBST(tree.right, tree.value, max);
    if (tree.right) return validBST(tree.right, tree.value, max);
    if (tree.left) return validBST(tree.left, min, tree.value);
    return true;
  }
  return validBST(tree);
}


module.exports = { BinaryTree, superbalanced };
