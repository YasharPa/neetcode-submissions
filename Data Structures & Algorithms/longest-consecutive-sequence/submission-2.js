class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let mapper  = new Set();
        let counter  = 0;
        let maxSize = 0;
        const length = nums.length;
        let currentNum = 0;
        if(length == 0) return 0;
        for(let i = 0; i < length; i++){
            mapper.add(nums[i]);
        }

        for(let i = 0; i < length; i++){
            currentNum = nums[i];
            
            if(mapper.has(currentNum -1)){
                continue;
            }

            while(mapper.has(currentNum)){
                counter++;
                
                if(counter > maxSize){
                    maxSize = counter;
                }

                currentNum += 1; 
            }
            counter  = 0;
        }

        return maxSize;
    }

}