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
     * @return {number[]}
     */
    postorderTraversal(root) {
        const res = []

        if (!root) return [];

        const leftRes = this.postorderTraversal(root.left);
        res.push(...leftRes);
        const rightRes = this.postorderTraversal(root.right);
        res.push(...rightRes);
        res.push(root.val);
        
        return res;

    }
}
