class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxArea = 0;
        
        while(left < right){
            let arrayLength = right - left;

            if(arrayLength * Math.min(heights[right], heights[left]) > maxArea){
                maxArea = arrayLength * Math.min(heights[right], heights[left]);
            }
            if(heights[left] > heights[right]){
                right--;    
            }else{
                left++;
            }
        }



        return maxArea;
    }
}
