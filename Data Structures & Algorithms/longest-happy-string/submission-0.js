class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @return {string}
     */
    longestDiverseString(a, b, c) {
        let result = "";
        let letters = [
            { char: 'a', count: a },
            { char: 'b', count: b },
            { char: 'c', count: c }
        ];
        
        while(true) {
            letters.sort((a, b) => b.count - a.count);

            if (letters[0].count === 0) {
                break;
            }

            if(result.length > 1 && 
               result[result.length - 1] === letters[0].char &&
               result[result.length - 2] === letters[0].char &&
               letters[1].count > 0){
                result += letters[1].char;
                letters[1].count -= 1;
            } else if(result.length > 1 && 
               result[result.length - 1] === letters[0].char &&
               result[result.length - 2] === letters[0].char &&
               letters[1].count === 0){
                return result;
            } else {
               result += letters[0].char;
               letters[0].count -= 1;
            }
        }
        
        return result;
    }
}