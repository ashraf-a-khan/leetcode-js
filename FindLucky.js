//1394. Find Lucky Integer in an Array
//Given an array of integers arr, a lucky integer is an integer that has a
//frequency in the array equal to its value.
//Return the largest lucky integer in the array. If there is no lucky integer return -1.

var findLucky = function (arr) {
  h_map = {};
  for (const i of arr) {
    if (h_map[i]) {
      h_map[i] += 1;
    } else {
      h_map[i] = 1;
    }
  }
  let luckyArr = [];
  for (const [key, value] of Object.entries(h_map)) {
    if (key == value) {
      luckyArr.push(key);
    }
  }
  if (luckyArr.length) {
    return Math.max(...luckyArr);
  } else {
    return -1;
  }
};
