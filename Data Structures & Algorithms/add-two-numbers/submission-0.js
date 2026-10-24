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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
     addTwoNumbers(L1, L2) {
    // מתחילים צומת עם ערך 0, כדי שנוכל להוסיף אליו תמיד בבטחה
    let result = new ListNode(0); 
    let curr = result;

    // רצים כל עוד יש איברים לפחות באחת הרשימות
    while (L1 !== null || L2 !== null) {
        
        // מוסיפים את הערכים של L1 ו-L2 לתוך הערך הקיים ב-curr 
        // (שאולי כבר מכיל 1 מהאיטרציה הקודמת)
        if (L1 !== null) {
            curr.val += L1.val;
            L1 = L1.next;
        }
        if (L2 !== null) {
            curr.val += L2.val;
            L2 = L2.next;
        }

        // אם יש חריגה מעל 9, נשאיר את האחדות וניצור את הצומת הבא עם 1
        if (curr.val > 9) {
            curr.val = curr.val % 10;
            curr.next = new ListNode(1);
        } 
        // אחרת, ניצור צומת חדש (עם 0) *רק אם נשארו עוד מספרים לחבר*
        else if (L1 !== null || L2 !== null) {
            curr.next = new ListNode(0);
        }

        // מתקדמים לצומת הבא שהרגע יצרנו (אם לא נוצר, הלולאה תסתיים)
        curr = curr.next;
    }

    return result;
}}

