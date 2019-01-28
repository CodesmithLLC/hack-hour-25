function isMirror(tree1, tree2) {
  if (tree1 === null && tree2 === null) return true;
  if (tree1 === null || tree2 === null) return false;
  return tree1.value === tree2.value && isMirror(tree1.left, tree2.right) && isMirror(tree1.right, tree2.left);
}

function isMirrored(tree) {

}
