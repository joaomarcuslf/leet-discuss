class Solution {
    public int appendCharacters(String s, String t) {

        int locationS = 0;
        int locationT = 0;
        int appendCharacters;

       while(locationS < s.length() & locationT < t.length()){
            
            if(s.charAt(locationS) == t.charAt(locationT)){
                locationS++;
                locationT++;
            }else{
                locationS++;
            }
       }
       appendCharacters =  t.length()-locationT;

       return appendCharacters;
        
    }
}
/*
tirei a variável appendCharacters pra melhorar meu uso de memória, e melhorou, porém meu runtime ficou bem abaixo da média...

primeira solução: 
runtime melhor que 51.85% da galera
memória melhor que 45.33%

esta solução abaixo:
runtime melhor que 8.26% da galera
memória melhor que 94.90%


class Solution {
    public int appendCharacters(String s, String t) {

        int locationS = 0;
        int locationT = 0;
        //int appendCharacters;

       while(locationS < s.length() & locationT < t.length()){
            
            if(s.charAt(locationS) == t.charAt(locationT)){
                locationS++;
                locationT++;
            }else{
                locationS++;
            }
       }
       //appendCharacters =  t.length()-locationT;

       return t.length()-locationT;
        
    }
} */
