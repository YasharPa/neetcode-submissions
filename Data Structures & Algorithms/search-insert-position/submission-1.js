class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid = 0;

    if (nums.length === 0) return 0;

    while (left <= right) {
        mid = Math.floor((right - left) / 2) + left;
        
        if (nums[mid] == target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else { right = mid -1; }
    }
    
    return left;
}}
