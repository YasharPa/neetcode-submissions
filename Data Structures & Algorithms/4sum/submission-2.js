class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        let sortedNums = nums.sort( (a ,b) => a - b);
        let result = [];
        for(let i = 0; i < nums.length; i++){
            if((i > 0) && sortedNums[i] == sortedNums[i -1]){
                continue;
            }
            for(let j = i + 1; j < nums.length; j++){
                if((j > i + 1) && sortedNums[j] == sortedNums[j -1]){
                continue;
                }
                let right = nums.length -1;
                let left =  j +1;
                while(right > left){
                    if(sortedNums[i] + sortedNums[j] + sortedNums[left] + sortedNums[right] === target){
                        result.push([sortedNums[i], sortedNums[j], sortedNums[left], sortedNums[right]]);
                        left++;
                        right--;
                        while(sortedNums[right] === sortedNums[right + 1]){
                            right--;
                        }
                        while(sortedNums[left] === sortedNums[left - 1]){
                            left++;
                        }
                    }else if(sortedNums[i] + sortedNums[j] + sortedNums[left] + sortedNums[right] > target){
                        right--;
                    }else{
                        left++;
                    }
                }
                
            }

        }



        return result;
    }
}
