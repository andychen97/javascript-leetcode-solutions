/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function(digits) {
//     let i = digits.length - 1;
//     if (digits[i] < 9) {
//         digits[i] += 1;
//     }
//     while (digits[i] === 9) {
//         digits[i] = 0;
//         digits[i - 1] += 1;
//         if (digits[0] === 0) {
//             digits.unshift(1);
//         }
//         i--;
//     }
//     return digits;
// };

let plusOne = function(digits) {
    for (let i=digits.length - 1; i >= 0; i--) {
        digits[i]++;
        if(digits[i] > 9){
            digits[i] = 0;
        }
        else{
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
};