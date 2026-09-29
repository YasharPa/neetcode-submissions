class Solution {
    /**
     * @param {string[]} words
     * @return {number}
     */
    countPrefixSuffixPairs(words) {
        
        let counter = 0;
        if(words.length === 0) return 0;
        
        for(let i = 0; i < words.length - 1; i++){
            for(let j = i + 1; j < words.length; j++){
                    if(words[j].startsWith(words[i]) && words[j].endsWith(words[i])){
                        counter++;
                    }
            }
        }
        return counter;
    }
}
