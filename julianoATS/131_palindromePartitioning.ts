function isPalindrome(s: string, left: number, right: number): boolean {
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }

    return true;
};

function palindromePartitioning(result: string[][], start: number, path: string[], s: string): void {
    if (start === s.length) {
        result.push([...path]);
        return;
    }

    for (let end = start; end < s.length; end++) {
        if(!isPalindrome(s, start, end)) continue;

        path.push(s.substring(start, end + 1));
        palindromePartitioning(result, end + 1, path, s);
        path.pop();
    }
};

function partition(s: string): string[][] {
    const result: string[][] = [];

    palindromePartitioning(result, 0, [], s);

    return result;
};
