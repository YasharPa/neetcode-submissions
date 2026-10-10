class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let right = x;
        let left = 0;
        let mid = 0;
        while(left <= right){
            mid = Math.floor((right - left) / 2) + left;
            if(mid * mid === x){return mid;}
            if(mid * mid < x){
                left = mid + 1;
            }else{
                right = mid - 1;
            }

        }

        return right;
    }
}
