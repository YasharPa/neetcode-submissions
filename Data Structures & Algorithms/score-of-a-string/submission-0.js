class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {

        let counter = 0;
        for(let i = 1; i < s.length; i++){
            counter += Math.abs(s.charCodeAt(i) -s.charCodeAt(i -1));
        }

        return counter;

    }
}
