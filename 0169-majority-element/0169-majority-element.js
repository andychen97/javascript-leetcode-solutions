/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) hash[nums[i]]++;
        else hash[nums[i]] = 1
    }
    let highest = 0;
    let key;
    for (value in hash) {
        if (hash[value] > highest) {
            highest = hash[value];
            key = value;
        }
    }
    return key;
};