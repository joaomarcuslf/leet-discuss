// using bigint:
function numStepsBigInt(s: string): number {
    let binaryCount = 0;
    let binaryTotal = BigInt("0b" + s);
    const bigInt0 = BigInt(0);
    const bigInt1 = BigInt(1);
    const bigInt2 = BigInt(2);


    while (binaryTotal !== bigInt1) {
        binaryTotal = BigInt(binaryTotal) % bigInt2 === bigInt0 ? BigInt(binaryTotal) / bigInt2 : BigInt(binaryTotal) + bigInt1;
        binaryCount++;
    }

    return binaryCount;
};

// using the binary string:
function numSteps(s: string): number {
    let steps = 0;
    let carry = 0;

    for (let i = s.length - 1; i > 0; i--) {
        if (parseInt(s[i]) + carry !== 1) {
            steps += 1;
            continue;
        }
        
        carry = 1;
        steps += 2;
    }
    
    return steps + carry;
}
