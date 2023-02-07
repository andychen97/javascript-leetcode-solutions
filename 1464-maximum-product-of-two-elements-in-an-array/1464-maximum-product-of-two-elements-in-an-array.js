/**
 * @param {number[]} nums
 * @return {number}
 */

//sorting method
var maxProduct = function(nums) {
    nums.sort((a,b) => b - a);
    return (nums[0] - 1) * (nums[1] - 1);
};


//brute force
// var maxProduct = function(nums) {
//     let highest = 0;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if ((nums[i]-1)*(nums[j]-1) > highest) highest = (nums[i]-1)*(nums[j]-1);
//         }
//     }
//     return highest;
// };