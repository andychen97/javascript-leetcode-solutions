/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const combinedSorted = nums1.concat(nums2).sort((a,b) => a - b);
    const half = Math.floor(combinedSorted.length / 2);
    if (combinedSorted.length % 2 === 0) {
        return Number((combinedSorted[half] + combinedSorted[half - 1]) / 2);
    } else {
        return combinedSorted[half];
        
    }
};