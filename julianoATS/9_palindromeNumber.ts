function reverseString (x: string): string {
    return x.split("").reverse().join("");
};

function isPalindrome(x: number): boolean {
    const numberString = x.toString();
    const numberStringReverse = reverseString(numberString);

    return numberString === numberStringReverse ? true : false;
};
