function mergeAlternately(word1: string, word2: string): string {
    let merge = '';
    let i = 0;
    const word1Length = word1.length;
    const word2Length = word2.length;

    while (i < word1Length && i < word2Length) {
        merge += word1[i];
        merge += word2[i];
        i++;
    }

    merge += word1Length > word2Length ? word1.slice(i) : word2.slice(i);

    return merge;
};
