class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        const temp = strs[0].split("");
        let res = "";

        for (let i =0; i< temp.length; i++){
            for(let j =0; j < strs.length; j++){
                if(temp[i] != strs[j][i]){
                    return res;
                }
            }
            res += temp[i];
        }
        


        return res;
    }
}
