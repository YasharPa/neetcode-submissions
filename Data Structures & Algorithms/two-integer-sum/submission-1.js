class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
      const storage = {};
      const numsLength  = nums.length;
      for(let i = 0; i < numsLength; i++){
        let temp = target - nums[i];
        if(temp in storage){
            return [storage[temp], i];
        }
        storage[nums[i]] = i
        }

        return [];
    };
    
}


