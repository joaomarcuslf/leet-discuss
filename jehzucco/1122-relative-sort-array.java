import java.util.ArrayList;
import java.util.Collections;

class Solution {

    public int[] bubbleSort(int[] arr){
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++)
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
        }
        return arr;
    }
    public int[] relativeSortArray(int[] arr1, int[] arr2) {

        ArrayList<Integer> result = new ArrayList<>();

        for(int i = 0; i < arr2.length; i++){
            for(int j = 0; j < arr1.length; j++){
                if(arr2[i] == arr1[j]){
                    result.add(arr1[j]);
                    arr1[j] = -1;
                }
            }
        }
        bubbleSort(arr1);

        for(int i = 0; i < arr1.length; i++){
            if(arr1[i] != -1){
                result.add(arr1[i]);
            }
        }
        return result.stream().mapToInt(Integer::intValue).toArray();
    }
}
