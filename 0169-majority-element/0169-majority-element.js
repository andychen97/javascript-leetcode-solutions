/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {};
    let num;
    let max = 0; 
    for (let i = 0; i < nums.length; i++){
        map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1
        if (map[nums[i]] > max) {
            max = map[nums[i]];
            num = nums[i];
        } 
    }
    return num;
    
};
