/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//     let numsLength = nums.length;
//     for (let i = 0; i < numsLength; i++) {
//         if (nums[i] === 0) {
//             nums.splice(i, 1);
//             nums.push(0);
//             i--;
//             numsLength--;
//         }
//     }
// };

var moveZeroes = function(nums) {
    let item = 0, pos;
    while (~(pos = nums.indexOf(0))) {
        item++;
        nums.splice(pos, 1);
    }
    nums.splice(nums.length, 0, ...((new Array(item)).fill(0)));
};