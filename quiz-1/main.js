// write function below
var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const possible = target - nums[i];
    if (map[possible] !== undefined) {
      return [i, map[possible]];
    } else {
      map[nums[i]] = i;
    }
  }
};

const answer = twoSum([2, 7, 11, 15], 9);
// eslint-disable-next-line no-console
console.log(answer);
