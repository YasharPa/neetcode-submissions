class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let length = nums.length;
        let right = length - 1;

        if(length === 1){
            if(nums[0] === target){
                return 0;
            }
        }
        while(left <= right){
            let mid = Math.floor((right - left) / 2 + left);
            
            if(nums[mid] === target){
                return mid;
            }

            if(nums[mid] >= nums[left]){
                if(target >= nums[left] && target < nums[mid]){
                    right = mid - 1;
                }else{
                    left = mid + 1;
                }
            } else {
               if(nums[mid] < target && target <= nums[right]){
                    left = mid + 1;
                }else{
                    right = mid - 1;
                }
            }

        }



        return -1;
    }
}
