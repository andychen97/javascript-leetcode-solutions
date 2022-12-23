/**
 * @param {number[]} nums
 * @return {number}
 */

//sorting
var maxProductDifference = function(nums) {
    const sorted = nums.sort((a, b) => a - b);
    return (sorted[sorted.length - 1] * sorted[sorted.length - 2]) - (sorted[0] * sorted[1]);
};

// // brute force
// var maxProductDifference = function(nums) {
//     let highest = 0;
//     let lowest = Infinity;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] * nums[j] > highest) {
//                 highest = nums[i] * nums[j];
//             }
//             if (nums[i] * nums[j] < lowest) {
//                 lowest = nums[i] * nums[j];
//             }
//         }
//     }
//     return highest - lowest;
// };
