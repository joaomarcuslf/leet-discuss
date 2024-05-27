function findTheDifference(s: string, t: string): string {
    const sMap = new Map<string, number>();

    for (const char of s) {
        sMap.set(char, (sMap.get(char) || 0) + 1);
    } 

    for (const char of t) {
        if (!sMap.has(char)) return char;

        sMap.set(char, sMap.get(char)! - 1);

        if (sMap.get(char) === 0) sMap.delete(char);
    }
};
