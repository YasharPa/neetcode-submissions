class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        if(s.length === 0) return 0;
        
        let map = new Map();
        let maxCount = 0; // האות הנפוצה ביותר בחלון
        let left = 0;     // תחילת החלון
        let longestSub = 0; // התוצאה הסופית שלנו

        for(let right = 0; right < s.length; right++){
            // 1. הוספת האות החדשה לחלון ועדכון הכמות שלה
            // (השימוש ב-|| 0 הוא טריק קצר כדי לתת 0 אם האות לא קיימת עדיין)
            map.set(s[right], (map.get(s[right]) || 0) + 1);
            
            // 2. עדכון האות הנפוצה ביותר
            if(map.get(s[right]) > maxCount){
                maxCount = map.get(s[right]);
            }

            // 3. כיווץ החלון אם הוא לא חוקי
            // (אורך החלון פחות האות הנפוצה > k)
            while ((right - left + 1) - maxCount > k) {
                // מורידים 1 מהמונה של האות שיוצאת מהחלון
                map.set(s[left], map.get(s[left]) - 1);
                // מקדמים את left כדי לכווץ את החלון
                left++;
            }

            // 4. עדכון האורך המקסימלי שנמצא עד כה
            let currentWindowLength = right - left + 1;
            if (currentWindowLength > longestSub) {
                longestSub = currentWindowLength;
            }
        }

        return longestSub;
    }
}