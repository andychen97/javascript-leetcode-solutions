/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let map = [];
    let result = [];
    for (let i = 0; i < names.length; i++) {
        map.push([names[i], heights[i]]);
    }
    map.sort((a, b) => b[1] - a[1]);
    
    for (let j = 0; j < map.length; j++) {
        result.push(map[j][0]);
    }
    return result;
};
