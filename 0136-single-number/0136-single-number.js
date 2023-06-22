/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length === 1) return nums[0];
    let hash = {};
   
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] === undefined) hash[nums[i]] = 1;
        else hash[nums[i]]++;
    }
    for (values in hash) {
        if (hash[values] === 1) return values; 
    }
};