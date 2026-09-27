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
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;
    
        while(fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;
        }
        let secondHalf = slow.next;
        slow.next = null;

        let curr = secondHalf;
        let prev = null;
        
        while(curr){
            let temp = curr.next;
            curr.next = prev; 
            prev = curr;
            curr = temp;        
        }

        let first = head;
        let second = prev;
        while(second != null){
            let temp1 = first.next;
            let temp2 = second.next;
            
            // 2. מבצעים את חיבור הריצ'רץ'
            first.next = second; // החצי הראשון מצביע לאיבר מהחצי השני
            second.next = temp1; // האיבר מהחצי השני מצביע להמשך של החצי הראשון
            
            // 3. מתקדמים הלאה לאיברים הבאים ששמרנו בצד
            first = temp1;
            second = temp2;
        }


        
    }
}
