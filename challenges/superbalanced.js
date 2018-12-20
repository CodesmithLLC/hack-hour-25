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

BinaryTree.prototype.add = function (value) {
  const node = new BinaryTree(value)
  if (node.value < this.value) {
    if (this.left === null) {
      this.left = node;
    } else {
      return this.left.add(value)
    }
  } else {
    if (node.value > this.value) {
      if (this.right === null) {
        this.right = node;
      } else {
        return this.right.add(value);
      }
    }
  }
}

BinaryTree.prototype.height = function() {

}

function superbalanced(tree) {

}

const tree = new BinaryTree(10);
tree.add(12)
tree.add(14)
tree.add(16)
tree.add(8)
tree.add(6)
tree.add(5)
tree.add(4)
// console.log(tree.height(tree));

console.log(tree);

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
