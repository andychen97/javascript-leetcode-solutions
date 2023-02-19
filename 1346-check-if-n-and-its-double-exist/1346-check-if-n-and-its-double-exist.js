/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
let map = {};
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] !== undefined) {
            return true;
        } else {
            map[arr[i] * 2] = i;
            map[arr[i] / 2] = i;
        }
    }
    return false;
};
