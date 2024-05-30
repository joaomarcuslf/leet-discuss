class Solution {
    public int countTriplets(int[] arr) {

        int count = 0;

        for(int k = 1; k < arr.length; k++){
            for(int j = 1; j <= k; j++){
                for(int i = 0; i < j; i++){

                    int index = i;
                    int a = arr[index];
                    while(index < j -1){
                        index++;
                        a = a ^ arr[index];
                    }
                    index = j;
                    int b = arr[index];
                    while(index < k){
                        index++;
                        b = b ^ arr[index];
                    }
                    if(a == b){
                        count++;
                    }

                    }

                }
            }
        return count;
    }
}
