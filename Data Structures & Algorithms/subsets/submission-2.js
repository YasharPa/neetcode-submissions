class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result = [];

        const backTrack = (nums, current, index) => {
            
            result.push([...current]);
            for(let i = index; i < nums.length; i++){
                current.push(nums[i]);
                backTrack(nums, current ,i + 1);
                current.pop();
            }
            
        }


        backTrack(nums, [], 0);
        return result;
        
    }
}
