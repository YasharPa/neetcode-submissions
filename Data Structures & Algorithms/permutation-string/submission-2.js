class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        if(s1.length > s2.length) return false;

        let map = {};

        const isMatch = () =>{
            for(let key in map){
                if(map[key] !== 0){
                    return false;
                }
            }
            return true;
        }
        for (let i = 0; i < s1.length; i++) {
            let char = s1[i];
            map[char] = (map[char] || 0) + 1;
        }
        
        for (let i = 0; i < s1.length; i++) {
            let char = s2[i];
            map[char] = (map[char] || 0) - 1;
        }
        
        if(isMatch()) return true;

        for (let i = s1.length; i < s2.length; i++) {
            let char = s2[i];
            map[char] = (map[char] || 0) - 1;
    
            let charOut = s2[i - s1.length];
    
            map[charOut] = (map[charOut] || 0) + 1;
            if(isMatch()) return true;

        }      

        return false;
    }
}
