/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
  let maxD = releaseTimes[0], maxK = keysPressed[0];
  
  for (let i = 1; i < releaseTimes.length; i += 1) {
    const duration = releaseTimes[i] - releaseTimes[i-1];
    if (maxD < duration) {
      maxD = duration;
      maxK = keysPressed[i];
    } else if (maxD == duration && keysPressed[i] > maxK) {
      maxK = keysPressed[i];
    }
  }
  
  return maxK;
};