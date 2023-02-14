/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    let stringed = n.toString(2)
    let count = 0;
    for (num of stringed) {
        if (num === '1') count++;
    }
    return count;
};