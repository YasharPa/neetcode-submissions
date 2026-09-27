class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let first = 0;
        let second = 0;

        while(second < t.length){
            if(s[first] == t[second]){
                first++;
            }
            second++;
        }

        if(first == s.length)return true;


        return false;
    }
}
