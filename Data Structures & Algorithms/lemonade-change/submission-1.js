class Solution {
    /**
     * @param {number[]} bills
     * @return {boolean}
     */
    lemonadeChange(bills) {
        let counter = [0,0,0];

        for(let i = 0; i < bills.length; i++){
            
            if(bills[i] === 5){
                counter[0] += 1;
            }else if(bills[i] === 10){
                if(counter[0] === 0){
                    return false;
                }else{
                    counter[1] += 1;
                    counter[0] -= 1;
                }
            }else if(bills[i]=== 20){
                if(counter[0] >= 1 && counter[1] >= 1){
                    counter[0]--;
                    counter[1] -= 1;
                }
                else if(counter[0] >= 3){
                    counter[0] -= 3;
                }else {
                    return false;
                }   
            }else {
                return false;
            }
        }

        return true;
    }
}
