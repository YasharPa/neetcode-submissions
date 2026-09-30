class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {

        let results = [];
        let currentPath = []
        const findCombinations = (target, startIndex, currentPath) => {

            if(target === 0){
                currentPath = [...currentPath];
                results.push(currentPath);
                return;
            }
            
            if(target < 0) return;

            for(let i = startIndex; i < nums.length; i++){
                currentPath.push(nums[i]);
                findCombinations(target - nums[i], i, currentPath);
                currentPath.pop();
            }


        }
        findCombinations(target, 0, currentPath);
        return results
    }
}
