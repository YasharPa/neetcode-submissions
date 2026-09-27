class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let counter = 0;
        let first = 0;
        let second = 0;

        while(second < t.length){
            if(s[first] == t[second]){
                first++;
                counter++;
            }
            second++;
        }

        if(counter == s.length)return true;


        return false;
    }
}
