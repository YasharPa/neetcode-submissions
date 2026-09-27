class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let left = 0; 
        let right = 0;
        let res = []
        while(right < n && left < m){
            if(nums1[left] > nums2[right]){
                res.push(nums2[right++]);
            }else{
                res.push(nums1[left++]);
            }
        }
        while(right < n){
            res.push(nums2[right++]);
        }
        while(left < m){
            res.push(nums1[left++]);
        }

        for(let i = 0; i< nums1.length; i++){
            nums1[i] = res[i];
        }
        
        return nums1;
    }
}
