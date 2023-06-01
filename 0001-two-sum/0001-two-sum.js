/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
     let possible = target - nums[i];
        if (possible in map) {
            return [i, map[possible]];
        }
        map[nums[i]] = i;
    }
};