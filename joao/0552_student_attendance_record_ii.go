const MOD = 1_000_000_007

func checkRecord(n int) int {
	dp := initializeDP(n)
	populateDP(dp, n)
	return sumValidStates(dp, n)
}

func initializeDP(n int) [][][]int {
	dp := make([][][]int, n+1)
	for i := range dp {
		dp[i] = make([][]int, 2)
		for j := range dp[i] {
			dp[i][j] = make([]int, 3)
		}
	}
	dp[0][0][0] = 1
	return dp
}

func populateDP(dp [][][]int, n int) {
	for i := 1; i <= n; i++ {
		for j := 0; j < 2; j++ {
			for k := 0; k < 3; k++ {
				dp[i][j][0] = (dp[i][j][0] + dp[i-1][j][k]) % MOD

				if j < 1 {
					dp[i][j+1][0] = (dp[i][j+1][0] + dp[i-1][j][k]) % MOD
				}

				if k < 2 {
					dp[i][j][k+1] = (dp[i][j][k+1] + dp[i-1][j][k]) % MOD
				}
			}
		}
	}
}

func sumValidStates(dp [][][]int, n int) int {
	result := 0
	for j := 0; j < 2; j++ {
		for k := 0; k < 3; k++ {
			result = (result + dp[n][j][k]) % MOD
		}
	}
	return result
}