class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let right = 0;
        let left = s.length - 1;
        
        while(right < left){
            if(!this.isAlphaNumeric(s[right])){
                right++;
                continue;
            }
            if(!this.isAlphaNumeric(s[left])){
                left--;
                continue;
            }
            if(s[right].toLowerCase() != s[left].toLowerCase()){
                return false;
            }
            
            right++;
            left--;
            
        }


        return true;
    }

    isAlphaNumeric(char) {
    const code = char.charCodeAt(0);
    return (code >= 48 && code <= 57) || // מספרים 0-9
           (code >= 65 && code <= 90) || // אותיות A-Z
           (code >= 97 && code <= 122);  // אותיות a-z
}
}

