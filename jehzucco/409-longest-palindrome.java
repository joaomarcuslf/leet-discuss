class Solution {
    public int longestPalindrome(String s) {
        
        char[] arr = s.toCharArray();
        int evenLetters = 0;

        int tamanhoArray = 0;

        int frequency = 1;

        boolean IsThereOdd = false;

        char compartivo = '-';

        for(int i = 0; i < s.length(); i++){
            if (arr[i] != compartivo){
                for( int j = i+1 ; j < s.length(); j++){
                    if(arr[i]==arr[j]){
                        frequency++;
                        arr[j] = compartivo;
                    }

                }
                if(frequency % 2 ==0){
                    tamanhoArray += frequency;

                }else{
                    tamanhoArray += frequency -1;
                    IsThereOdd = true;
                }
                frequency = 1;
            }


        }

        if(IsThereOdd == true){
            tamanhoArray +=1;
        }

    return tamanhoArray;    
    }
}
