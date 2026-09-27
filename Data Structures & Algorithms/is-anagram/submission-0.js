class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const firstArr = [0]
        const secondArr = [0]

        const sLength = s.length
        const tLength = t.length
        let j = 0

        if(sLength != tLength){
             return false;
             }

        for(let i = 0; i < sLength; i++){
            if(firstArr[s[i]] === undefined){
                firstArr[s[i]] = 1;
            }
            else{
                firstArr[s[i]] += 1;    
            }
        }
       
       for(let i = 0; i < sLength; i++){
            if(secondArr[t[i]] === undefined){
                secondArr[t[i]] = 1;
            }
            else{   
                secondArr[t[i]] += 1;
            }
        }
        for (let letter in firstArr){
            if(secondArr[letter] !=firstArr[letter]){
                return false
            }            
        }

        return true
    } 
}
