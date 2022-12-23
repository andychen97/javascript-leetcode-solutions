/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        nums[i] % 2 === 0 ? arr.unshift(nums[i]) : arr.push(nums[i]);
    }
    return arr;
};