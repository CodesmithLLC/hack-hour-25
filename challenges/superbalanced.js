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
// const superBalanced = rootNode => {
//   //implement DFS
//   const stack = [{node: rootNode, depth: 0}];
//   const endLeafDepths = [];

//   while (stack.length) {
//     // const value = stack.pop();
//     // const currNode = value.node;
//     // const depth = value.depth;
//     const { node: currNode, depth } = stack.pop();
//     if (!currNode.left && !currNode.right) {
//       if (endLeafDepths.indexOf(depth) < 0)
//         endLeafDepths.push(depth);
//         if (endLeafDepths.length > 2 || endLeafDepths.length === 2 && Math.abs(endLeafDepths[0] - endLeafDepths[1]) > 1){
//           return false;
//         }
//     } else {
//       if (currNode.right) {
//         stack.push({node: currNode.right, depth: depth+1});
//       }
//       if (currNode.left) {
//         stack.push({node: currNode.left, depth: depth+1});
//       }
//     } 
//   }
//   return true;
// }


function superbalanced(root) {
  

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
