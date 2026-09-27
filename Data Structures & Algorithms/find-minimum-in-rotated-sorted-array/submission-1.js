class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let length = nums.length;
        let right = length - 1;
        let mid;
        while(left < right){
            mid = Math.floor(((right - left)/ 2 ) + left);
            if(nums[right] < nums[mid]){
                left = mid + 1;
            }
            else{
                right = mid;
            }
        }       

        return nums[right];
    }
}
