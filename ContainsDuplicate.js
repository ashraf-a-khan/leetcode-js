//217. Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

var containsDuplicate = function (nums) {
  let h_map = {};
  for (const i of nums) {
    if (h_map[i]) {
      h_map[i] += 1;
    } else {
      h_map[i] = 1;
    }
  }

  const notOne = Object.values(h_map).filter((id) => id !== 1);
  return notOne.length !== 0;
};
