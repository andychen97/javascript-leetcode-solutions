/**
 * @param {number[]} nums
 * @return {boolean}
 */

var check = function(nums) {
   var count = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > nums[(i+1) % nums.length]) count++;
    }
    return count > 1 ? false : true;
};

// 51 ms runtime 42.3MB space
// var check = function(nums) {
//   let decreased = false;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] < nums[i - 1]) {
//       if (decreased) {
//         return false;
//       }
//       decreased = true;
//     }
//   }
//   return decreased ? nums[0] >= nums[nums.length - 1] : true;
// };