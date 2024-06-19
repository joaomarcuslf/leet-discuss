class Solution {
    public int maxProfitAssignment(int[] difficulty, int[] profit, int[] worker) {

        int counter = 0;
        int assign = -1;
        int maxProfit = 0;

        for(int j = 0; j < worker.length; j++){
            for(int i = 0; i < difficulty.length; i++){
                if(worker[j] >= difficulty[i] && profit[i] > maxProfit){
                    assign = i;
                    maxProfit = profit[i];
                }  
            }
            if(assign > -1){
                counter+= profit[assign];
            } 
            assign = -1;
            maxProfit = 0;
        }
    return counter;   
    }
}
