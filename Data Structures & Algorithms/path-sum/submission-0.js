/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} targetSum
     * @return {boolean}
     */
 hasPathSum(root, targetSum) {
    const rec = (root, targetSum) => {
        if (root == null) return false;

        if (root.left === null && root.right === null && targetSum === root.val)      return true;
        if (root.left === null && root.right === null && targetSum !== root.val)      return false;
        
        if (root.left === null && root. 
        right !== null) {
             rec(root.right, targetSum - root.val);
        }
        if (root.right === null && root.left!== null) {
            rec(root.left, targetSum - root.val);
        }
        
        return (rec(root.left, targetSum - root.val) || rec(root.right, targetSum - root.val));
    }

    return rec(root, targetSum);
}

}
