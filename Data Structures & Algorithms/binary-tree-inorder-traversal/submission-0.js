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
    inorderTraversal(root) {
        const res = [];
        
        if (root === null)
            return [];
        const leftResult = this.inorderTraversal(root.left);
        res.push(...leftResult);
        res.push(root.val);    
        const rightResult = this.inorderTraversal(root.right);
        res.push(...rightResult);       
        return res;

    }
}
