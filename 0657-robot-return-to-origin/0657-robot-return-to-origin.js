/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let count = 0;
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === 'U') count++;
        if (moves[i] === 'D') count--;
        if (moves[i] === 'L') count += 5;
        if (moves[i] === 'R') count -= 5;
    }
    return count === 0;
};