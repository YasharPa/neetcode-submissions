class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {

        let results = [];
        let currentPath = [];
        let total = 0;
        const findCombinations = (total, startIndex, currentPath) => {

            if(target === total){
                results.push([...currentPath]);
                return;
            }
            
            if(total > target || startIndex >= nums.length) return;

            currentPath.push(nums[startIndex]);
            findCombinations(total + nums[startIndex], startIndex, currentPath);
            currentPath.pop();
            findCombinations(total, startIndex + 1, currentPath);

            
        }

        findCombinations(total, 0, currentPath);
        return results
    }
}
