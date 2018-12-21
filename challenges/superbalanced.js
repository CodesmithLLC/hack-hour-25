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

function superbalanced(root) {
  var Util = {

    getHeight: function (root) {
      if (root === null) { // Base case
        return 0;
      }
      return Math.max(Util.getHeight(root.left), Util.getHeight(root.right)) + 1;
    },

    isBalanced: function (root) {
      if (root === null) { // Base case
        return true;
      }
      var heightDifference = Math.abs(Util.getHeight(root.left) - Util.getHeight(root.right));
      if (heightDifference > 1) {
        return false;
      } else {
        return Util.isBalanced(root.left) && Util.isBalanced(root.right);
      }
    }

  };

}

var BST = new BinaryTree();
BST.insertNode(8);
BST.insertNode(3);
BST.insertNode(10);
BST.insertNode(1);
BST.insertNode(6);
BST.insertNode(14);
BST.insertNode(4);
BST.insertNode(7);
// BST.insertNode(13);

// Find if the given tree is balanced or not
console.log(Util.isBalanced(BST.root)); // true

// Un-comment L#39 to make tree imbalanced
console.log(Util.isBalanced(BST.root)); // false


module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
