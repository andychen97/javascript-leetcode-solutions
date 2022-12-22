/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        const possible = target - nums[i];
        if (map[possible] !== undefined) {
            return [i, map[possible]]
        } else {
            map[nums[i]] = i;
        }
    }
}