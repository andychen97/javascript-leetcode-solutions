/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sorted = [...nums].sort((a,b) => a - b);
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] !== i) {
            return i;
        }
    }
    return sorted.length;
};