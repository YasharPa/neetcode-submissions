class Solution {
    /**
     * @param {number[]} prices
     * @param {number} money
     * @return {number}
     */
    buyChoco(prices, money) {

        if (prices.length <= 1) return money;
        
        const result = money;
        const sortedPrices = prices.sort((a,b) => a - b);
        
        for(let i = 0; i < 2; i++){
            if (money - sortedPrices[i] < 0){
                if(i > 0){
                    return result;
                }
                return money;
            }else{
                money -= sortedPrices[i];
            }

        }

        return money;
    }
}
