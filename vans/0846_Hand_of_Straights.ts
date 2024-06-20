function isNStraightHand(hand: number[], groupSize: number): boolean {
    if(hand.length % groupSize !== 0) {
        return false;
    }

    const freqMap: { [key: number]: number } = {};
    for (const card of hand) {
        freqMap[card] = (freqMap[card] || 0) + 1;
    }

    const sortedCards = Object.keys(freqMap).map(Number).sort((a, b) => a - b);

    for (const card of sortedCards) {
        if (freqMap[card] === 0) {
            continue;
        }

        const count = freqMap[card];

        for (let i = 0; i < groupSize; i++) {
            const currentCard = card + i;
            if((freqMap[currentCard] || 0) < count) {
                return false;
            }

            freqMap[currentCard] -= count;
        }
    }

    return true;
};
