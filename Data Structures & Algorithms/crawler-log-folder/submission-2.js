class Solution {
    /**
     * @param {string[]} logs
     * @return {number}
     */
    minOperations(logs) {
        
        if(logs.length === 0) return 0;

        let counter = [];

        
        for(let i = 0; i < logs.length; i++){
            if(logs[i] === "../"){
                counter.pop();
            } else if(logs[i]  === "./"){
                continue;
            }else{
                counter.push(logs[i]);
            }
        }

        return counter.length;
    }
}
