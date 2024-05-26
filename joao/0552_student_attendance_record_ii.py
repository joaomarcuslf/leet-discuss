class Solution:
    def checkRecord(self, n: int) -> int:
        MOD = 10**9 + 7

        memo = {}

        def count_records(n, A_count, L_count):
            if n == 0:
                return 1

            if (n, A_count, L_count) in memo:
                return memo[(n, A_count, L_count)]

            result = 0

            result += count_records(n - 1, A_count, 0)
            result %= MOD

            if A_count < 1:
                result += count_records(n - 1, A_count + 1, 0)
                result %= MOD

            if L_count < 2:
                result += count_records(n - 1, A_count, L_count + 1)
                result %= MOD

            memo[(n, A_count, L_count)] = result
            return result

        return count_records(n, 0, 0)
