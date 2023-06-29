/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


var moveZeroes = function(nums) {
    let index = 0; 
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[index]] = [nums[index], nums[i]];
            index++;
        }
    }
	return nums;
};

// this runs a lot faster:
// [nums[i], nums[index]] = [nums[index], nums[i]];

// and is the shorter way of writing this:
// let temp = nums[i];
// nums[i] = nums[index];
// nums[index] = temp;