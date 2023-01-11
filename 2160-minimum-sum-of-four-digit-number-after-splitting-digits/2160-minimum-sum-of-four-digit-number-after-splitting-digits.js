/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    const split = num.toString().split('');
    split.sort((a, b) => a - b);
    return Number(split[0] + split[2]) + Number(split[1] + split[3]);
};