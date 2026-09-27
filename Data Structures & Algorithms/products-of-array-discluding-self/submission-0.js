class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = [];
        const arrLength = nums.length;
        let sumOfProduct = 1;

        for(let i = 0; i < arrLength; i++){
            result[i] = sumOfProduct;
            sumOfProduct *= nums[i];
        }
        
        sumOfProduct = 1;
        
        for(let i = arrLength - 1; i >= 0; i--){
            result[i] *= sumOfProduct;
            sumOfProduct *= nums[i]; 
        }
        

        return result; 
    }
}
