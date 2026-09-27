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
    preorderTraversal(root) {
        let res = [];
        if(!root) return [];

        res.push(root.val);
        const leftRes =this.preorderTraversal(root.left);
        res.push(...leftRes);
        const rightRes = this.preorderTraversal(root.right); 
        res.push(...rightRes);
        
        return res;
    }
}
