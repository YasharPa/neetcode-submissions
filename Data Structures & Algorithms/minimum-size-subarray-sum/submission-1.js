class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
       if(nums.length === 0 || target === 0) return 0;
        let result = Infinity;
        let sum = 0;
        let left = 0;
        let right = 0;

        while(right < nums.length){
            sum += nums[right];
            while(sum >= target){
                if((right - left + 1) < result){
                    result = right - left + 1;
                }
                 sum -= nums[left];
                 left++;
            }
            
                right++;
        }
        
    

        return result === Infinity ? 0: result;
    }
}
