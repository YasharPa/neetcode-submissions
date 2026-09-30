class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {

        let result = 0;
        const len = nums.length;
        let sum = 0

        for(let i = 0; i < len; i++){
            sum = nums[i];
            if(k - sum === 0) result += 1;    
            
            for(let j  = i + 1; j < len; j++){
                sum += nums[j];
                if(k - sum === 0) result += 1;    
            }
            
        }

        return result;
    }
}
