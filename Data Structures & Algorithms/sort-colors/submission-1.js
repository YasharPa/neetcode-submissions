class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let map = {};
        let index = 0;

        for(let i =0; i< nums.length; i++){
            if(!(nums[i] in map)){
                map[nums[i]] = 1;
            }else{
                map[nums[i]] += 1; 
            }
        }
        for(let i = 0; i < nums.length; i++){
            while(map[i]){
                nums[index++] = i;
                map[i] -= 1;
            }
        }

        return nums;
    }   
}
