class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    maximumOddBinaryNumber(s) {
        let count = 0;
        for (const c of s) {
            if (c === '1') count++;
        }

        return '1'.repeat(count - 1) + '0'.repeat(s.length - count) + '1';
    }
}