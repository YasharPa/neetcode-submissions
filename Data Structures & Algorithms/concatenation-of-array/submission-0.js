class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = [];
        let length = nums.length;
        for(let i =0; i < length; i++){
            ans[i] = nums[i];
            ans[i + length] = nums[i];
        }
        return ans;
    }
}
