class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {

        let firstNumber = 0;
        let secondNumber = 0;
        let stack = []
        
        for(let i = 0; i < tokens.length; i++){
            if(tokens[i] == "-" || tokens[i] == "+" || tokens[i] == "*" || tokens[i] == "/"){
                secondNumber = stack.pop();
                firstNumber = stack.pop();
                
                switch(tokens[i]){
                    case "-":
                        stack.push(firstNumber - secondNumber);
                        break;

                    case "/":
                        stack.push(Math.trunc(firstNumber / secondNumber));
                        break;

                    case "*":
                        stack.push(firstNumber * secondNumber);
                        break;

                    case "+":
                        stack.push(firstNumber + secondNumber);
                        break;
                }
            }else{
                stack.push(parseInt(tokens[i]));
            }
        }    
        
        return stack.pop();
    }
}
