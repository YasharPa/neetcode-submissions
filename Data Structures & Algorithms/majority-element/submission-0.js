class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let majorNum = new Map();
        let res = [0,0];

        for(let i =0; i < nums.length; i++){
            if(majorNum.has(nums[i])){
                majorNum.set(nums[i], majorNum.get(nums[i]) + 1);
            }
            else{
                majorNum.set(nums[i], 1);
            }
        }

        majorNum.forEach((val, key) => {
            if(val > Math.floor(nums.length / 2) && val > res[1]){
                res[0] = key;
                res[1] = val;
            }
        })

        return res[0];
    }
}
