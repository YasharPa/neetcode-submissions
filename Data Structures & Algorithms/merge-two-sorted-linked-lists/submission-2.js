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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if(list1 == null) return list2;
        if(list2 == null) return list1;

        let result = null;
        let first = list1;
        let second = list2;
        if(first.val > second.val){
            result = second;
            second = second.next;
        }else{
            result = first;
            first = first.next;
        }
        let curr = result;
        while(first != null && second != null){
            if(first.val < second.val){
                curr.next = first;
                first = first.next;
            }else{
                curr.next = second;
                second = second.next;
            }
            curr = curr.next;
        }

        while(first != null){
            curr.next = first;
            first = first.next;
            curr = curr.next;
        }

        while(second != null){
            curr.next = second;
            second = second.next;
            curr = curr.next;
        }
        curr = null;
        return result;
    }
}
