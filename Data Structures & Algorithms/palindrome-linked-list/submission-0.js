class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    isPalindrome(head) {
        let temp = head;
        let tail = head;

        while (tail !== null && tail.next !== null) {
            tail = tail.next.next;
            temp = temp.next;
            
        }

        let prev = null;
        let curr = temp;
        let nextTemp = null;

        while (curr !== null) {
            nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }

        while (prev !== null) {
            if (head.val !== prev.val) return false;
            head = head.next;
            prev = prev.next;
        }

        return true;
    }
}