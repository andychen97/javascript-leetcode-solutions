/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let most = 0;
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > most) {
            most = candies[i];
        }
    }
    let arr = [];
    for (let j = 0; j < candies.length; j++) {
        candies[j] + extraCandies >= most ? arr.push(true) : arr.push(false);
        }
    return arr;
};