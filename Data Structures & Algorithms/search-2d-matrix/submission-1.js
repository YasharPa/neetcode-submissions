class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let right = 0;
        let left = matrix.length - 1;
        let length = matrix[0].length - 1;

        while(right <= left){
            let mid = Math.floor((right + left) / 2);
            if(target >= matrix[mid][0] && target <= matrix[mid][length]){
                let inRight = 0;
                let inLeft = matrix[mid].length - 1;
                
                while(inRight <= inLeft){
                    let innerMid = Math.floor((inRight + inLeft) / 2);
                    if(target == matrix[mid][innerMid]){
                        return true;
                    }else if(target > matrix[mid][innerMid]){
                        inRight = innerMid + 1;
                    }else{
                         inLeft = innerMid - 1;
                    }
                }
                return false;
            }
            else if(target > matrix[mid][length]){
                right = mid + 1 ;
            }
            else {
                left = mid - 1;
            }
        }

        return false;
    }
}
