class Solution {
    public int specialArray(int[] nums) {

        int x = -1;
        int count = 0;
       
       for(int i = 0; i <= nums.length; i++){
            for(int j = 0; j < nums.length; j++){
                if(nums[j] >= i){
                    count++;
                }
            }
        if(i == count){
                x=i;
        }
        count = 0;
       }
     return x;
    }
}
