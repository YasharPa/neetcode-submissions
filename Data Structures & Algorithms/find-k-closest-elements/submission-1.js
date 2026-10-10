class MinHeap {
    constructor() {
        this.heap = [];
    }

    // --- תוקן התחביר של השורות הבאות (נוסף * והורדו ירידות השורה והמינוסים) ---
    getLeftChildIndex(parentIndex) { return 2 * parentIndex + 1; }
    getRightChildIndex(parentIndex) { return 2 * parentIndex + 2; }
    getParentIndex(childIndex) { return Math.floor((childIndex - 1) / 2); }

    hasParent(index) { return this.getParentIndex(index) >= 0; }
    hasLeftChild(index) { return this.getLeftChildIndex(index) < this.heap.length; }
    hasRightChild(index) { return this.getRightChildIndex(index) < this.heap.length; }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    // --- נוספה פונקציה חיונית להשוואה בין האובייקטים ---
    isSmaller(itemA, itemB) {
        if (itemA.distance === itemB.distance) {
            return itemA.key < itemB.key;
        }
        return itemA.distance < itemB.distance;
    }

    peek() {
        if (this.heap.length === 0) return null;
        return this.heap[0];
    }

    insert(item) {
        this.heap.push(item);
        this.heapifyUp();
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        
        return min;
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        // --- תוקן: שימוש ב-isSmaller במקום השוואה רגילה ---
        while (this.hasParent(index) && this.isSmaller(this.heap[index], this.heap[this.getParentIndex(index)])) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            
            // --- תוקן: שימוש ב-isSmaller במקום < ---
            if (this.hasRightChild(index) && this.isSmaller(this.heap[this.getRightChildIndex(index)], this.heap[smallerChildIndex])) {
                smallerChildIndex = this.getRightChildIndex(index);
            }

            // --- תוקן: שימוש ב-isSmaller ---
            if (this.isSmaller(this.heap[index], this.heap[smallerChildIndex])) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            
            index = smallerChildIndex;
        }
    }
    
    size() {
        return this.heap.length;
    }
}

class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        if (k === 0 || arr.length === 0) return [];
        let result = [];
        let minHeap = new MinHeap();

        for (let i = 0; i < arr.length; i++) {
            minHeap.insert({
                key: arr[i],
                distance: Math.abs(x - arr[i])
            });
        }

        for (let i = 0; i < k; i++) {
            result.push(minHeap.extractMin().key);
        }

        result.sort((a, b) => a - b);
        return result;
    }
}