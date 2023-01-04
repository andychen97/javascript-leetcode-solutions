/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */


var wateringPlants = function(plants, capacity) {
    let steps = 0;
    let i = 0;
    let water = capacity;
    while (i < plants.length) {
        if (water >= plants[i]) {
            steps++;
            water -= plants[i];
            i++;
        } else {
            steps = steps + (2 * i);
            water = capacity;
        }
    }
    return steps;
}; 
