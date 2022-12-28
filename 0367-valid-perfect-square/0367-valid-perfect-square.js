/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let possible = Number(Math.sqrt(num)) % 1 === 0;
    
    return possible;
};