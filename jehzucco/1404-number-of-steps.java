import java.math.BigInteger;
class Solution {
    public int numSteps(String s) {
        BigInteger numero = new BigInteger(s, 2);
        int passos = 0;

        
        while (!numero.equals(BigInteger.ONE)) {
            if (numero.mod(BigInteger.TWO).equals(BigInteger.ZERO)) {
                
                numero = numero.divide(BigInteger.TWO);
            } else {
               
                numero = numero.add(BigInteger.ONE);
            }
            passos++;
        }

        return passos;
    }
}
