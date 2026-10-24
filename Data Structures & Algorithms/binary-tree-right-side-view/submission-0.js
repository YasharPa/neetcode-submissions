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
    
    rightSideView(root) {
        let result = [];
        
        const rec = (node, depth) => {
            if (node === null) return;
            
            // אם במערך עדיין אין איבר במיקום של העומק הנוכחי, זהו האיבר הימני ביותר שפגשנו ברמה זו
            if (result[depth] === undefined) {
                result.push(node.val);
            }
            
            // מתקדמים קודם ימינה ואז שמאלה, ומגדילים את העומק ב-1
            rec(node.right, depth + 1);
            rec(node.left, depth + 1);
        }
        
        rec(root, 0);
        return result;
    }
}


