/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
    let left = 0; // לרוב בבעיות אלו מתחילים מ-1, תלוי בהגדרת הבעיה
    let right = n;

    while (left <= right) {
        let mid = Math.floor((right - left) / 2) + left;
        let guessed = guess(mid);

        if (guessed === 0) {
            return mid;
        } else if (guessed === -1) {
            right = mid - 1;
        } else if (guessed === 1) {
            left = mid + 1;
        }
    }
    
    return -1; // במקרה שהמספר לא נמצא
}
}

