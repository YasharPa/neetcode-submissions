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
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head, val) {
    let prev = null;
    let curr = null;

    if (head === null) return null;
    
    while (head !== null && head.val === val) {
        head = head.next;
    }

    curr = head;

    while (curr !== null) {
        if (curr.val === val) {
            prev.next = curr.next;
            curr = curr.next;
        } else {
            prev = curr;
            curr = curr.next;
        }
    }
    
    return head;
}

}
