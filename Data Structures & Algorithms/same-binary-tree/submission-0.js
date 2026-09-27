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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
    
    if(!q && !p) return true;
    
    if(q && p && q.val != p.val) return false;

    if((!q && p) || (q && !p)) return false;

    const left = this.isSameTree(p.left, q.left);
    const right = this.isSameTree(p.right, q.right);
    return left && right;
    // return true;
    // const preorder = (root) => {
    //     let res = [];
    //     if(!root) return [];

    //      res.push(root.val);
    //      const leftRes = preorder(root.left);
    //      res.push(...leftRes);
    //      const rightRes = preorder(root.right); 
    //      res.push(...rightRes);
    //     return res;
    // }
    // let left = preorder(p);
    // let right = preorder(q);

    // if(left.length > right.length || left.length < right.length)  return false;
    
    // const length = left.length;

    // for(let i = 0; i < length; i++){
    //     if(left[i] != right[i]) return false;
    // }


    // return true;
    }
}
