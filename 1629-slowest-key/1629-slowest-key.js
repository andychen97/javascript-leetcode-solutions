/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let longestTime = releaseTimes[0];
    let letter = keysPressed[0];
    
    for (let i = 1; i < releaseTimes.length; i++) {
        if (releaseTimes[i] - releaseTimes[i - 1] > longestTime) {
            longestTime = releaseTimes[i] - releaseTimes[i - 1];
            letter = keysPressed[i];
        } else if (releaseTimes[i] - releaseTimes[i - 1] === longestTime && keysPressed[i] > letter) {
            letter = keysPressed[i];
        }
    }
    return letter;
};
