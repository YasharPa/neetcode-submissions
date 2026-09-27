class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let first = 0;
        let second = 1;
        let index = 0;
        
        if(stones.length === 0) return 0;
        if(stones.length === 1) return stones[0];
        
        while(index < stones.length){
            
            for(let i = 1; i < stones.length; i++){
                if(stones[i] >= stones[first]){
                    second = first;
                    first = i;
                }
                if(stones[i] < stones[first] && stones[i] > stones[second]){
                    second = i;
                }
            }

            if(stones[first] > stones[second]){
                stones[first] = stones[first] - stones[second];
                stones[second] = 0;
            }else {
                stones[first] = 0;
                stones[second] = 0;

            }
            index++;
            second = 1;
            first = 0;
        }
        index = 0;
        
        for(let i = 0; i < stones.length; i++){
            if(stones[i] > 0){
                index = stones[i];
            }
        }

        return index;
    }
}
