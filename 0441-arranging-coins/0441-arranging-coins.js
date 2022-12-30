/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let count = 0;
    let stairs = 1;
    while (n >= stairs) {
        n -= stairs;
        stairs++;
        count++;
    }
    return count;
};