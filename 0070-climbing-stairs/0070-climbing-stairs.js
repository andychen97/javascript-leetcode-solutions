/**
 * @param {number} n
 * @return {number}
 */
let memo = {};
var climbStairs = function(n) {
    if (n == 0) {
        return 1
    }
    if (!memo[n - 1]) {
        memo[n - 1] = climbStairs(n - 1)
    }
    return memo[n - 1] + (memo[n - 2] || 0)
};