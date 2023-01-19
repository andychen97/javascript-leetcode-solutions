/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let set3 = new Set(nums3);
    let unique = [...set1, ...set2, ...set3];
    let counter = {};
    for (element of unique) {
        counter[element] === undefined ? counter[element] = 1 : counter[element]++;
    }
    let arr = [];
    for (let key in counter) {
        if (counter[key] >= 2) arr.push(Number(key));
    }
    return arr;
};