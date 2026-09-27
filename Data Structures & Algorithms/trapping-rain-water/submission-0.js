class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let right = height.length - 1;
        let maxLeft = height[left] ;
        let maxRight = height[right];
        let counter = 0;

        while(right >= left){
            
            
            if(maxLeft < maxRight){
                if(height[left] > maxLeft){
                    maxLeft = height[left];
                }
                counter += maxLeft - height[left];
                left++;
            }
            
            else {
                if(height[right] > maxRight){
                    maxRight = height[right];
                }
                counter += maxRight - height[right];
                right--;
                
            }

        }
        
        return counter;
    }
}
