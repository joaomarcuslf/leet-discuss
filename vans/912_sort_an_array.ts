function mergeSort(nums: number[]): number[] {
    if (nums.length <= 1) {
        return nums;
    }

    const mid = Math.floor(nums.length / 2);
    const leftHalf = mergeSort(nums.slice(0, mid));
    const rightHalf = mergeSort(nums.slice(mid));

    return merge(leftHalf, rightHalf);
}

function merge(left: number[], right: number[]): number[] {
    const sortedArray: number[] = [];
    let i = 0, j = 0;

    const leftLength = left.length;
    const rightLength = right.length;

    // Merging the sorted halves
    for (; i < leftLength && j < rightLength;) {
        if (left[i] < right[j]) {
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
    }

    // Collect remaining elements from left half
    for (; i < leftLength; i++) {
        sortedArray.push(left[i]);
    }

    // Collect remaining elements from right half
    for (; j < rightLength; j++) {
        sortedArray.push(right[j]);
    }

    return sortedArray;
}

function sortArray(nums: number[]): number[] {
    return mergeSort(nums);
}
