class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        if(word1.length === 0) return word2;
        if(word2.length === 0) return word1;

        let result = '';
        let first = 0;
        let second = 0;
        while(first < word1.length && second < word2.length){
            if(first <= second){
                result += word1[first++];
            }else{
                result += word2[second++];
            }
        }
        while(first < word1.length){
            result += word1[first++];
        
        }
        while(second < word2.length){
            result += word2[second++];
        }

        return result;
    }
}
