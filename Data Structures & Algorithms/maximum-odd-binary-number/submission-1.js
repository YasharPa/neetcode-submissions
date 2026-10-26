class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    maximumOddBinaryNumber(s) {

        let counter = 0;
        let res = s.split('');
        
        // while(res[counter] === '1'){
        //     counter++;
        // }

        for (let i = 0; i < s.length - 1; i++){
            if(res[i] === '1' && res[res.length - 1] === '0'){
                res[i] = '0';
                res[res.length - 1] = '1';
            }
            else if(res[i] === '1' && res[counter] === '0'){
                res[i] = '0';
                res[counter++] = '1';
            }else if(res[i] === '1' && res[counter] === '1'){
                counter++;
            }
            
        }

        return res.join('');
    }
}
