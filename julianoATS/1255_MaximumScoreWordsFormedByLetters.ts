function countLetters(letters: string[]): Map<string, number> {
    const letterCount: Map<string, number> = new Map();
    for (const letter of letters) {
        letterCount.set(letter, (letterCount.get(letter) || 0) + 1);
    }

    return letterCount;
}

function calculateWordScore(word: string, score: number[]): number {
    let wordScore = 0;
    for (const char of word) {
        wordScore += score[char.charCodeAt(0) - 97];
    }

    return wordScore;
}

function canFormWord(word: string, availableLetters: Map<string, number>): boolean {
    const letterCount: Map<string, number> = new Map(availableLetters);
    for (const char of word) {
        if ((letterCount.get(char) || 0) <= 0) return false;

        letterCount.set(char, letterCount.get(char)! - 1);
    }

    return true;
}

function updateLetterCount(word: string, availableLetters: Map<string, number>, increase: boolean) {
    for (const char of word) {
        availableLetters.set(char, (availableLetters.get(char) || 0) + (increase ? 1 : -1));
    }
}

function backtrack(words: string[], scores: number[], index: number, availableLetters: Map<string, number>): number {
    if (index === words.length) {
        return 0;
    }

    let maxScore = backtrack(words, scores, index + 1, availableLetters);

    const word = words[index];
    if (canFormWord(word, availableLetters)) {
        updateLetterCount(word, availableLetters, false);
        maxScore = Math.max(maxScore, scores[index] + backtrack(words, scores, index + 1, availableLetters));
        updateLetterCount(word, availableLetters, true);
    }

    return maxScore;
}

function maxScoreWords(words: string[], letters: string[], score: number[]): number {
    const lettersSorted: string[] = letters.sort((a, b) => a.localeCompare(b));
    const availableLetters: Map<string, number> = countLetters(lettersSorted);
    const scoreFiltered: number[] = score.filter(Number);
    const wordScores = words.map(word => calculateWordScore(word, score));
    
    return backtrack(words, wordScores, 0, availableLetters);
}
