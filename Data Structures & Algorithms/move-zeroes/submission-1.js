class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {

        if(nums.length === 0) return nums;
        let left = 0;
        let right = 0;
        let temp = 0;

        while(left < nums.length){
            if(nums[left] === 0){
                right = left;
                while(right < nums.length && nums[right] === 0){right++;}
                if(right > nums.length -1) return nums;

                temp = nums[right];
                nums[right] = nums[left];
                nums[left] = temp;
            }

            left++;
        }


        return nums;
    }
}
