function specialArray(nums) {
  nums.sort((a, b) => a - b);
  for (let x = 0; x <= nums.length; x++) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= x) {
        count++;
      }
    }
    if (count === x) {
      return x;
    }
  }
  return -1;
}

console.log(specialArray([3, 9, 7, 8, 3, 8, 6, 6]));