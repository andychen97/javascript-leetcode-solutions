/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let numsSet = [...new Set(nums)].sort((a,b) => a - b);
    if (numsSet.length < 3) return numsSet[numsSet.length - 1];
    else return numsSet[numsSet.length - 3];
};