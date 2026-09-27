class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result  = "";
        strs.forEach(str =>{
            let length = str.length;
            result  += `${length}!${str}`;
        });

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decodedArr = [];
        let i = 0

        while(i < str.length){
            let j = str.indexOf("!",i);
            let number = parseInt(str.slice(i, j));
            let word = str.slice(j + 1, j + 1 + number);
            decodedArr.push(word);

            i = number + j + 1;
        }

        return decodedArr;
    }
}
