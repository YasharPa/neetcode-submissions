class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let length = prices.length;
        let min = prices[0];
        let max = prices[0];
        let maxResult = 0;
        for(let i = 0 ;i < length; i++){
            if(prices[i] > max){
                max = prices[i];
            }
            if(prices[i] < min){
                min = prices[i];
                max = prices[i];

            }
            if(max - min > maxResult){
                maxResult = max - min;
            }
        }

        return maxResult
    }
}
