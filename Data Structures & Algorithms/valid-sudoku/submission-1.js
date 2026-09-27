class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let newSet = new Set();
        for(let i = 0; i < 9; i++){
           for(let j = 0; j < 9; j++){
                if(board[i][j] !== '.'){
                    let num = parseInt(board[i][j])
                    let col = `${num} at col ${i}`;
                    let row = `${num} at row ${j}`;
                    let sqr = `${num} at (${Math.floor(i/3)}, ${Math.floor(j/3)})`;

                    if(newSet.has(col) || newSet.has(row) || newSet.has(sqr)){
                        return false;
                    }
                    newSet.add(col);
                    newSet.add(row);
                    newSet.add(sqr);
                }
           }     

        }        

        return true;
        



    }
}
 