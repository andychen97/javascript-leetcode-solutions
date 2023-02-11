/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let sorted = salary.sort((a,b) => a - b);
    if (sorted.length === 3) return sorted[1];
    let sum = 0;
    for (let i = 1; i < salary.length - 1; i++) {
        sum += salary[i];
    }
    return sum / (salary.length - 2);
};