class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        
        if (nums.length === 0) return 0;
        
        let prev = 0;
        let curr = 0;
        const length = nums.length;

        while(curr < length){
            if(nums[curr] !== val){
                nums[prev++] = nums[curr++];
            }else{
                curr++;
            }
        }

        return prev;
    }
}
