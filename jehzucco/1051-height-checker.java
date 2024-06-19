class Solution {
    public int heightChecker(int[] heights) {
        
        int[] sortedHeights = heights.clone();

        int n = sortedHeights.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++)
                if (sortedHeights[j] > sortedHeights[j + 1]) {
                    int temp = sortedHeights[j];
                    sortedHeights[j] = sortedHeights[j + 1];
                    sortedHeights[j + 1] = temp;
                }
        }

        int count = 0;
        for(int i = 0; i < heights.length; i++){
            if(heights[i] != sortedHeights[i]){
                count++;
            }
        }
        return count;

    }
}
