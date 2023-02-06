/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (arr.length < 3) return false;
    let counterUp = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] > arr[i]) {
            counterUp++;
        } else { 
            break;
        }
    }
    if (counterUp === 0 || counterUp === arr.length - 1) return false;
    let counterDown = 0;
    for (let j = counterUp; j < arr.length - 1; j++) {
        if (arr[j + 1] < arr[j]) {
            counterDown++;
        } else {
            return false;
        }
    }
    return true;
};