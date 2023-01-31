/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let longestTime = releaseTimes[0];
    let letter = keysPressed[0];
    
    for (let i = 1; i < releaseTimes.length; i++) {
        let time = releaseTimes[i] - releaseTimes[i - 1];
        if (time > longestTime) {
            longestTime = time;
            letter = keysPressed[i];
        } else if (time === longestTime && keysPressed[i] > letter) {
            letter = keysPressed[i];
        }
    }
    return letter;
};
