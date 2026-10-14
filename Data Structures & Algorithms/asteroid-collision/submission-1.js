class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = [];
        
        for (let i = 0; i < asteroids.length; i++) {
            let current = asteroids[i];
            let isDestroyed = false;
            
            // כל עוד יש אסטרואיד חיובי בראש המחסנית והאסטרואיד הנוכחי נע שמאלה
            while (stack.length > 0 && stack[stack.length - 1] > 0 && current < 0) {
                let top = stack[stack.length - 1];
                
                if (Math.abs(current) > top) {
                    // האסטרואיד הנוכחי גדול יותר, משמיד את זה שבמחסנית וממשיך לבדוק
                    stack.pop();
                } else if (Math.abs(current) === top) {
                    // שניהם באותו גודל, שניהם מושמדים
                    stack.pop();
                    isDestroyed = true;
                    break;
                } else {
                    // האסטרואיד שבמחסנית גדול יותר, הנוכחי מושמד
                    isDestroyed = true;
                    break;
                }
            }
            
            // אם האסטרואיד הנוכחי שרד את כל ההתנגשויות (או שלא היו התנגשויות כלל), נוסיף אותו
            if (!isDestroyed) {
                stack.push(current);
            }
        }
        
        return stack;
    }
}

     