
    /**
     * @param {number[]} gifts
     * @param {number} k
     * @return {number}
     */
class Solution {
    pickGifts(gifts, k) {
        const pq = new MaxPriorityQueue();
        
        // הכנסת כל הערימות לתור (ברוב הספריות המעודכנות מספיק פרמטר אחד)
        for (let i = 0; i < gifts.length; i++) {
            pq.enqueue(gifts[i]); 
        }
        
        for (let i = 0; i < k; i++) {
            let maxPile = pq.dequeue();
            
            // שולפים את הערך המספרי - בין אם הפונקציה החזירה אובייקט ובין אם מספר ישירות
            let val = maxPile.element !== undefined ? maxPile.element : maxPile;
            
            let reducedPile = Math.floor(Math.sqrt(val));
            pq.enqueue(reducedPile);
        }
        
        let counter = 0;
        while (!pq.isEmpty()) {
            let item = pq.dequeue();
            let val = item.element !== undefined ? item.element : item;
            counter += val;
        }
        
        return counter;
    }
}
    
