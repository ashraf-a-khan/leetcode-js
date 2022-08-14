//167. Two Sum II - Input Array Is Sorted

var twoSum = function (numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while (start < end) {
    if (numbers[start] + numbers[end] > target) {
      end--;
    } else if (numbers[start] + numbers[end] < target) {
      start++;
    } else {
      return [start + 1, end + 1];
    }
  }
};
