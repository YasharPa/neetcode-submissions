class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let results = new Map();

        const rec = (index) => {
            if(index >= cost.length) return 0;
            if(results.has(index)) return results.get(index);
            
            let lastMin = cost[index] + Math.min(rec(index + 1), rec(index + 2));
            results.set(index, lastMin);
            return lastMin;
        }
        
        return Math.min(rec(0, cost[0]), rec(1, cost[1]));

    }
}
