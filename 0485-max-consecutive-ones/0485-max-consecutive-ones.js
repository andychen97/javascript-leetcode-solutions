/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let tempCount = 0;
    for (let num of nums) {
        if (num) {
            tempCount++;
        } else {
            count = Math.max(count, tempCount);
            tempCount = 0;
        }
    }
    return Math.max(count, tempCount);
};