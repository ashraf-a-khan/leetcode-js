/**
 *Given an integer array nums, move all 0's to the end of it
  while maintaining the relative order of the non-zero 
  elements.

Note that you must do this in-place without making a copy of 
the array.

 
 */

var moveZeroes = function (nums) {
  if (nums.length === 0) {
    return;
  }

  let i = 0;
  let j = 0;
  let temp = 0;
  while (j < nums.length) {
    if (nums[i] === 0) {
      if (nums[j] !== 0) {
        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
      } else {
        j++;
      }
    } else {
      i++;
      j++;
    }
  }
};
