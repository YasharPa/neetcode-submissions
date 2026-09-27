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
     * @return {boolean}
     */
    isBalanced(root) {
        const AVL = (root) =>{
            if(!root) return 0;

            let right = AVL(root.right);
            let left = AVL(root.left);
            if(left === -1 || right === -1) return -1;
            if(Math.abs(left - right) > 1){
                return -1;
            }
            return Math.max(right, left) + 1;
        }
        
        let res = AVL(root);
        if(res === -1) return false;
        return true;    
    }
}
