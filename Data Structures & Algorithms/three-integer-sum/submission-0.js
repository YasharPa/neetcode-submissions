class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const length = nums.length;
        const results = []; 

        for(let i= 0; i< length; i++){
            if((i > 0) && nums[i] == nums[i -1]){
                continue;
            }
            let right = i + 1;
            let left = nums.length - 1;

            while(right < left){
                if(nums[i] + nums[right] + nums[left] == 0){
                    
                    results.push([nums[i], nums[right], nums[left]])
                    left--;
                    right++;
                    while(nums[right] == nums[right -1]){
                        right++;
                    }
                }
                else if(nums[i] + nums[right] + nums[left] > 0){
                    left--;
                }
                else if(nums[i] + nums[right] + nums[left] < 0){
                    right++;
                }
            }
        }
        

        return results;
    }   
}
