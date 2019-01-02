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


const arr = [1, 2, 3, 4, 6, 7, 8, 9];
const root = new BinaryTree(5);
function makeBT(root, num) {
  if(!root){
    return new BinaryTree(num);
  }
  if(num < root.value){
    root.left = makeBT(root.left,num);
  }
  if(num > root.value){
    root.right = makeBT(root.right,num);
  }
  return root;
}
const bst = arr.reduce((a,b)=>{return makeBT(a,b)},root);
console.log(bst);

function printBST(){
  const arr = [];
  function innerFun(tree){
    if(tree){
      innerFun(tree.left);
      arr.push(tree.value);
      innerFun(tree.right);
      return arr;
    }
  }
  return innerFun;
}
const pBST = printBST();

// function superbalanced(tree, arr) {
//   const half = Math.floor(arr.length/2);
//   const root = new BinaryTree(arr[half]);
//   if(arr.length===0){
//     return null;
//   }
//   root.left=superbalanced(root,arr.slice(0,half));
//   root.right=superbalanced(root,arr.slice(half));
//   return root;

// }

function superbalanced(root){

  if(!root){
    return null
  }
  let left = superbalanced(root.left);
  let right= superbalanced(root.right);

  if(left>right){
    return left + 1;
  }
  return right + 1;
}

console.log(superbalanced(bst))



superbalanced(bst);

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
