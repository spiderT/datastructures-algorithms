/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let j = 0;
    const n = nums.length;
    for (let i = 1; i < n; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[i - j] = nums[i]
        } else {
            j++;
        }
    }
    return n - j;
};

var nums = [1,1,4,2];
var  result  = removeDuplicates(nums);

console.log('result', result);