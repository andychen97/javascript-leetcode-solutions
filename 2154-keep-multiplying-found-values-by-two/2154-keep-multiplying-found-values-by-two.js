/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    nums.sort((a,b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === original) original *= 2;
    }
    return original;
};

// var findFinalValue = function(nums, original) {
//     while (nums.includes(original)) {
//         original = original * 2
//     }
    
//     return original
// };