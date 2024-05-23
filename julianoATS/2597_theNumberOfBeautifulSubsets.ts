function isBeautiful(path: number[], num: number, k: number): boolean {
    for (let value of path) {
        if (Math.abs(value - num) === k) return false;
    }

    return true;
};

function beautifulBacktracking(result: number[][], start: number, path: number[], nums: number[], k: number): void {
    if (path.length > 0) {
        result.push([...path]);
    }

    for (let i = start; i < nums.length; i++) {
        if(!isBeautiful(path, nums[i], k)) continue;

        path.push(nums[i]);
        beautifulBacktracking(result, i + 1, path, nums, k);
        path.pop();
    }
};

function beautifulSubsets(nums: number[], k: number): number {
    const result: number[][] = [];

    beautifulBacktracking(result, 0, [], nums, k);

    return result.length;
};
