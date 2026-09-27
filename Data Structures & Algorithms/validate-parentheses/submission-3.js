class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let myStack = []
        const brakets = {
            "}":"{",
            "]":"[",
            ")":"(",
        }
        for (let braket of s){
            if(brakets[braket] == undefined){
                myStack.push(braket); 
            }
            else if(brakets[braket] == myStack.at(-1)){
                myStack.pop();
            }else{
                return false
            }
            
        };

        if(myStack.length > 0){
            return false;
        };
        return true;
    }
}
