class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
       let maxCounter = 0;
       let length = s.length;
       let left = 0;
       let mySet = new Set();
       
       for(let right = 0; right < length; right++){
            while(mySet.has(s[right])){
                mySet.delete(s[left]);
                left++;
            }
            mySet.add(s[right]);
            maxCounter = Math.max(maxCounter, right - left + 1);
       }

       return maxCounter; 
    }
}
