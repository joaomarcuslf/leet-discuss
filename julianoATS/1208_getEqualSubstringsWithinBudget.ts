function equalSubstring(s: string, t: string, maxCost: number): number {
    let left: number = 0;
    let currentCost: number = 0;
    let maxLength: number = 0;

    for (let right = 0; right < s.length; right++) {
        const defference: number = Math.abs(t.charCodeAt(right) - s.charCodeAt(right));
        currentCost += defference;

        while (currentCost > maxCost) {
            currentCost -= Math.abs(t.charCodeAt(left) - s.charCodeAt(left));
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};
