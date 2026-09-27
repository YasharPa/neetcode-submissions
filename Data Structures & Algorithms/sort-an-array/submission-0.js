class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        const quickSort = (nums) => {
            let pivot = nums[0];
            const left = [];
            const right = [];
            if (nums.length <= 1) {
                 return nums;
            }
            for (let i = 1; i < nums.length; i++) {
                if(pivot > nums[i]){
                    left.push(nums[i]);
                }else{
                    right.push(nums[i]);

                }
            }

         return [...quickSort(left), pivot, ...quickSort(right)];
        }
        const res = quickSort(nums);

        return res;
    }
}
