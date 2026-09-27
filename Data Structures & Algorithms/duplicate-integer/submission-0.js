class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsLength = nums.length
        for(let i =0; i< numsLength; i++){
            for(let j =i+1; j < numsLength; j++){
                if(nums[i] == nums[j])
                    return true
            
            }

        }
        return false
    }
}
