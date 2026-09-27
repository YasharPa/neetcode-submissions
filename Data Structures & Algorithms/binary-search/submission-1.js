class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let mid;
        while(left <= right){
            mid = (right + left / 2);
            if(nums[mid] == target) return mid;
            else if(nums[mid] > target){
                right = mid - 1;                
            }
            else{
                left = mid + 1;
            }

        }
        if(nums[mid] !== target) return -1;

        return mid;
    }
}
