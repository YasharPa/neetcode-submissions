class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const arr = {};
        const length = nums.length;
        const result = [];

        for (let i = 0; i < length ; i++){
            arr[nums[i]] = (arr[nums[i]] || 0) + 1;
        }

        const tempArr = Object.entries(arr).sort((a,b) =>{
            return b[1] - a[1];
        });

        for (let i = 0; i < k ; i++){
                result.push(tempArr[i][0]);    
        }
        
        return result;
    }
}
