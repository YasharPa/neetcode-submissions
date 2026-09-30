class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        let len = k % nums.length;

        const reverse = (arr, start, end) => {

            while(start < end){
                [arr[start], arr[end]] = [arr[end], arr[start]];
                start++;
                end--;
            }
        }
        reverse(nums,0, nums.length - 1);
        reverse(nums, 0, len -1);
        reverse(nums,len, nums.length -1);        

    }
}
