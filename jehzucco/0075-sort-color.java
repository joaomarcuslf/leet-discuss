class Solution {
    public void sortColors(int[] nums) {
        
        int counterZero = 0;
        int counterUm = 0;
        int counterDois = 0;

        for(int i = 0; i < nums.length; i++){
            if(nums[i] == 0){
                counterZero++;
            }
            if(nums[i] == 1){
                counterUm++;
            }
            if(nums[i] == 2){
                counterDois++;
            }
        }

        int pointer = 0;
        int sentinela = 0;
        while(pointer < nums.length){
            while(sentinela < counterZero){
                nums[pointer] = 0;
                sentinela++;
                pointer++;
            }
            sentinela = 0;
            while(sentinela < counterUm){
                nums[pointer] = 1;
                sentinela++;
                pointer++;
            }
            sentinela = 0;
            while(sentinela < counterDois){
                nums[pointer] = 2;
                sentinela++;
                pointer++;
            }
        }
             
    }    
}
