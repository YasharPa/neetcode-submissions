class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        let diffWays = {};
        
        const rec = (index, sum) => {
            // יצירת המפתח הייחודי כמחרוזת
            let key = `${index},${sum}`; 
            
            // שימוש במפתח החדש
            if(key in diffWays) return diffWays[key]; 
            
            if(index === nums.length){
                return sum === target ? 1 : 0;
            } 
            
            // שמירת התוצאה תחת המפתח
            diffWays[key] = (rec(index + 1, sum + nums[index]) +
                             rec(index + 1, sum - nums[index]));
                             
            return diffWays[key];
        }
        
        return rec(0, 0);
    }
}