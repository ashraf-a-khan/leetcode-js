// 169. Majority Element
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

var majorityElement = function (nums) {
  let count = {};
  for (const element of nums) {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  }
  let maximum = Object.keys(count).reduce((a, b) =>
    count[a] > count[b] ? a : b
  );
  return maximum;
};
