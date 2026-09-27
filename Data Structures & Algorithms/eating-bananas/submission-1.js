class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        let bestRate = Infinity;
        let bananasCounter = 0;
       

        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            // checks the best mid
            let temp = this.countEatingRate(piles, mid);
            if(temp <= h){
                bestRate = mid;
                right = mid -1
            }
            else{ 
                left = mid + 1;
            
            }

        }   

        return bestRate;
    }

    countEatingRate(piles, mid){
        let rate = 0;
        let length = piles.length;
        
        for(let index =0; index < length; index++){
            rate += Math.ceil(piles[index] / mid);
        }
        
        return rate;
    }
}
