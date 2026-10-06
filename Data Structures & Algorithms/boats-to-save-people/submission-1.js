class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        
        if(people.length === 0) return 0;

        let sortedWeights = people.sort((a,b) => a - b);
        let left = 0;
        let right = people.length -1;
        let counter = 0;

        while(left < right){
            if(sortedWeights[right] + sortedWeights[left] <= limit){
                right--;
                left++;
                counter++;
            }else{
                right--;
                counter++;
            }
        }
         return right === left? counter +1: counter;
    }   
}
