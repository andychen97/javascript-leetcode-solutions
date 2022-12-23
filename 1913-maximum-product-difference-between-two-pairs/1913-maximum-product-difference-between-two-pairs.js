/**
 * @param {number[]} nums
 * @return {number}
 */
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

var maxProductDifference = function(nums) {
    const [a, b] = nums.sort((a, b) => b - a)
    const [c, d] = nums.reverse()
    return (a * b) - (c * d)
};