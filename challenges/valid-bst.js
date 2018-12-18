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

// given arg tree is a node
// if tree.left is null
// if tree.right is null
function validBST(tree) {
    let valid = false;
    if (tree.left >= tree.value || tree.right <= tree.value) return false;
    if ((tree.left < tree.value || tree.left === null) && (tree.right > tree.value || tree.right === null)) {
        // valid = true;
        // let leftNode = tree.left;
        // let rightNode = tree.right;
        let leftResult = validBST(tree.left);
        let rightResult = validBST(tree.right);
        if (leftResult === true && rightResult === true) valid = true;
    }
    return valid;
}


module.exports = {BinaryTree: BinaryTree, validBST: validBST};
