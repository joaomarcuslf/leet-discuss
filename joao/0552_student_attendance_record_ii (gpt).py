class Solution:
    MOD = 10*9 + 7

    def checkRecord(self, n: int) -> int:
        dp = self.initialize_dp(n)
        self.populate_dp(dp, n)
        return self.sum_valid_states(dp, n)

    def initialize_dp(self, n: int):
        dp = [[[0] 3 for  in range(2)] for  in range(n + 1)]
        dp[0][0][0] = 1
        return dp

    def populate_dp(self, dp, n: int):
        for i in range(1, n + 1):
            for j in range(2):
                for k in range(3):
                    dp[i][j][0] = (dp[i][j][0] + dp[i - 1][j][k]) % self.MOD

                    if j < 1:
                        dp[i][j + 1][0] = (dp[i][j + 1][0] + dp[i - 1][j][k]) % self.MOD

                    if k < 2:
                        dp[i][j][k + 1] = (dp[i][j][k + 1] + dp[i - 1][j][k]) % self.MOD

    def sum_valid_states(self, dp, n: int):
        result = 0
        for j in range(2):
            for k in range(3):
                result = (result + dp[n][j][k]) % self.MOD
        return result
