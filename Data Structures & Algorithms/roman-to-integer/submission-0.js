class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    romanToInt(s) {

        const letters = {
            'I': 1,
            'V': 5,
            'X':10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }
        let sum = 0;

        for(let i = 0; i < s.length; i++){
            if(i > 0 && 
            (s[i] === 'V' && s[i -1] === 'I' || 
             s[i] === 'X' && s[i -1] === 'I' || 
             s[i] === 'L' && s[i -1] === 'X' ||
             s[i] === 'C' && s[i -1] === 'X' ||
             s[i] === 'D' && s[i -1] === 'C' ||
             s[i] === 'M' && s[i -1] === 'C' 
            )) {
                sum += letters[s[i]] - (2 * letters[s[i -1]]);
            }
            else{
                sum += letters[s[i]];
            }
        }
        return sum;
    }
}
