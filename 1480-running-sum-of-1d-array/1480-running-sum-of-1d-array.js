/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let count = 0;
    let runningCount = [];
    for (let i = 0; i < nums.length; i++) {
        count += nums[i];
        runningCount.push(count);
    }
    return runningCount;
}