/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    let possible = original;
    nums.sort((a,b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === possible) possible *= 2;
    }
    return possible;
};