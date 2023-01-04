/**
 * @param {number[]} tasks
 * @return {number}
 */

var minimumRounds = function(tasks) {
    const map = {};
    let count = 0;
    for (const element of tasks) {
      if (map[element]) map[element] += 1;
      else map[element] = 1;
    }
    for (totalCount of Object.values(map)) {
        if (totalCount < 2) return -1;
        if (totalCount % 3 === 0) count += totalCount / 3;
        else count += Math.ceil(totalCount / 3);
    }
    return count;
};

// SLOOOWWWW runtime so refactored to use for of loop instead of for loop
// var minimumRounds = function(tasks) {
//     const map = {};
//     let count = 0;
//     for (const element of tasks) {
//       if (map[element]) map[element] += 1;
//       else map[element] = 1;
//     }
//     let totalCount = Object.values(map);
//     for (let i = 0; i < totalCount.length; i++) {
//         if (totalCount[i] < 2) return -1;
//         if (totalCount[i] % 3 === 0) count += totalCount[i] / 3;
//         else count += Math.ceil(totalCount[i] / 3);
//     }
//     return count;
// };