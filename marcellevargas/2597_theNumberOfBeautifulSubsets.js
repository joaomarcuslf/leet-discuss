const verifyBeautifulSubset = (subset, target) => {
    for (let i = 0; i < subset.length; i++) {
        for (let j = i + 1; j < subset.length; j++) {
            if (Math.abs(subset[i] - subset[j]) === target) {
                return false;
            }
        }
    }
    return true;
}

const backtrack = (result, currentPartition, arr, target, start) => {
    for (let i = start; i < arr.length; i++) {
        currentPartition.push(arr[i]);

        if (verifyBeautifulSubset(currentPartition, target)) {
            result.push([...currentPartition]);
        }
        backtrack(result, currentPartition, arr, target, i + 1);
        currentPartition.pop();
    }
}

var beautifulSubsets = function(nums, k) {
    const result = [];
    backtrack(result, [], nums, k, 0)
    return result.length;
};

beautifulSubsets([4,2,5,9,10,3], k = 1)
