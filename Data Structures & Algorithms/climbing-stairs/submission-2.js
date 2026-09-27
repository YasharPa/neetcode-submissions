class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const memo = {};
        const rec = (number) => {
            if(number <= 1) return 1;
            if(memo[number]) return memo[number];
            
            memo[number] = rec(number - 1) + rec(number - 2);
            return memo[number];
        }

        return rec(n);


    }
}