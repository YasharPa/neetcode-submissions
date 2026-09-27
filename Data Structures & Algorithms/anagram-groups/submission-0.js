class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagram_list = {}
        strs.map(string => {
            let sorted_string = string.split('').sort().join('');
                if (sorted_string in anagram_list){
                    anagram_list[sorted_string].push(string); 
                }
                else{
                    anagram_list[sorted_string] = [string];
                }
        });
        const result = Object.values(anagram_list);
        return result;
    }

}
