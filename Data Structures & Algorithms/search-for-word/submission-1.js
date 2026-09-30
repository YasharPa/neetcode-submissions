class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let checkWord = '';
        let i = 0;
        let j = 0;
        let wordIndex = 0;
        const rec = (checkWord, i, j, wordIndex) => {
            if(checkWord === word) return true;
            if(i < 0 || i >= board.length || j < 0 || j >= board[0].length) return false;

            if(board[i][j] === word[wordIndex]){
                let temp = board[i][j];
                board[i][j] = '*';
                let result =  (rec(checkWord.concat(temp), i, j + 1, wordIndex + 1) || 
                        rec(checkWord.concat(temp), i + 1, j, wordIndex + 1) || 
                        rec(checkWord.concat(temp), i, j - 1, wordIndex + 1) || 
                        rec(checkWord.concat(temp), i - 1, j, wordIndex + 1));
                board[i][j] = temp;
                return result
            }else{
                return false;
            }

        }

        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[0].length; j++){
                if(board[i][j] === word[0]){
                    let res = rec(checkWord, i, j, wordIndex);
                    if(res == true) return true;
                }
            }
        }

        
        return false;
    }
}
