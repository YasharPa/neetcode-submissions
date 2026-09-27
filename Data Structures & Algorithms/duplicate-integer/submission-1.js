class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const seen = new Set();
        for (let num of nums){
            if(seen.has(num)){
                return true

            }

            seen.add(num)
        }

        return false
        // const numsLength = nums.length
        // for(let i =0; i< numsLength; i++){
        //     for(let j =i+1; j < numsLength; j++){
        //         if(nums[i] == nums[j])
        //             return true
            
        //     }

        // }
        // return false
    }
}
