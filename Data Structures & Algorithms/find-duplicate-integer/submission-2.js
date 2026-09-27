class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {

        nums.sort((a, b) => a-b);
        for(let i=1; i< nums.length; i++){
            if(nums[i] - nums[i -1] <= 0){return nums[i]};
        }

    }
}
