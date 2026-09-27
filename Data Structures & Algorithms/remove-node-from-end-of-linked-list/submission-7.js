/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {

        let dummy = new ListNode(0, head);
        let prev = dummy;
        let curr = dummy;
        let j  = 0;
        
        if(head.next == null) return null;

        while(curr && j <= n ){
            curr = curr.next;
            j++;
        }

        while(curr){
            prev = prev.next;
            curr = curr.next;
        }

        prev.next = prev.next.next;
        return dummy.next;


    }
}
