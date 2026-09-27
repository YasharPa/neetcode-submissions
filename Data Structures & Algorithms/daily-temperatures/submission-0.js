class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        
        let stack = [];
        let length = temperatures.length;
        let result = new Array(length);
        result.fill(0);
        let temp = 0;

        for(let i = 0; i < length; i++){
            while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length -1]]){
                 temp = stack.pop();
                result[temp] = i - temp;
            }
            stack.push(i);

        }   

        return result;
    }
}
 