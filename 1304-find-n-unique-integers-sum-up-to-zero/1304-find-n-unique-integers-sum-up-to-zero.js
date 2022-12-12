/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let arr =  n % 2 === 0 ? [] : [0];
    for (let i = 1; i < n; i += 2) {
        arr.push(-i);
        arr.push(i);  
    }
    return arr;
};
