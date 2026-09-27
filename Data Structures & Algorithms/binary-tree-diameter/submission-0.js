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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let maxVal = 0;

        const findDiameter = (root) => {
            if (!root) return 0;
            let left  = findDiameter(root.left);
            let right =  findDiameter(root.right);

            maxVal = Math.max(maxVal, left + right);
            return Math.max(left, right) + 1;
        }
        findDiameter(root);
        return maxVal;
    }
}
