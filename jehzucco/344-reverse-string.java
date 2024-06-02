class Solution {
    public void reverseString(char[] s) {

       int pointerEnd = s.length - 1;

        for(int pointerStart = 0; pointerStart < s.length /2; pointerStart ++){
            char aux = s[pointerStart];
            s[pointerStart] = s[pointerEnd];
            s[pointerEnd] = aux;
            pointerEnd--;
        }
    }    
}
