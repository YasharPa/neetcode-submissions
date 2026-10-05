class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {

        let currentString = '';
        let stack = [];
        let currentNumber = 0;
        
        
        
        for(let i = 0; i < s.length; i++){
            let char = s[i];
            if(char >= '0' && char <= '9'){
                currentNumber = (currentNumber * 10) + Number(char);
            }else if(char >= 'a' && char <= 'z'){
                currentString += char;
            }else if(char  === '['){
                stack.push(currentString, currentNumber);
                currentNumber = 0;
                currentString = '';
            }else{
                    currentNumber = stack.pop();
                    char = stack.pop();
                    currentString = char + currentString.repeat(currentNumber);
                    currentNumber  = 0;
                
            }
        }



        return currentString;
    }
}
