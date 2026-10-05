class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {

        let score = 0;
        let stack = [];
        let counter = 0;
        for(let i = 0; i < operations.length; i++){
            switch(operations[i]){
                case 'C':
                    stack.pop();
                    break;
                case 'D':
                    let double = stack[stack.length -1];
                    stack.push(double * 2);
                    break;
                case '+':
                    let first = stack[stack.length - 1];
                    let second = stack[stack.length - 2];
                    stack.push(first + second);
                    break;
                default:
                    
                    stack.push(parseInt(operations[i]));

            }
        }
        for(let i = 0; i < stack.length; i++){
            score += stack[i];
        }

        return score;
    }
}
