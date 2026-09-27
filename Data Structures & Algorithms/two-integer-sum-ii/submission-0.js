class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let right  = 0;
        let left = numbers.length - 1;
        

        while(right < left){
            if(numbers[left] + numbers[right] == target){
                return [right + 1, left + 1];
            }
            else if(numbers[left] + numbers[right] > target){
                left--;
            }
            else if(numbers[left] + numbers[right] < target){    
                right++;
            }else{
                right++;
                left--;
            }

        }

        return [];
    }
}
 