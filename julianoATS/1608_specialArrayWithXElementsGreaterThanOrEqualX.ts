function specialArray(nums: number[]): number {
    const sortedNums: number[] = nums.sort((a,b) => a > b ? a : b);
    const numsLength: number = nums.length;

    for (let index = 1; index < numsLength + 1; index++) {
        let count = 0;
        for (let j = 0; j < numsLength; j++) {
            if (nums[j] >= index) count++;
        }

        if (count === index) return index;
    }

    return -1;
};
