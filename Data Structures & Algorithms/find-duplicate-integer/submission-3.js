class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {

    let left = 0;
    let right = 0;

    right = nums[nums[right]];
    left = nums[left];
        
        while(left != right){
            left = nums[left];
            right = nums[nums[right]];
        }    

    left = 0;
        while(nums[left] != nums[right]){
            right = nums[right];
            left = nums[left]
        }

    return nums[left];
    }
}
