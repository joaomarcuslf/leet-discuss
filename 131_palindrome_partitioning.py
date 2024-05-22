class Solution(object):
    def partition(self, s):
        def is_palindrome(sub):
            return sub == sub[::-1]

        def backtrack(start, acc):
            if start == len(s):
                result.append(acc)
                return

            for end in range(start + 1, len(s) + 1):
                candidate = s[start:end]
                if is_palindrome(candidate):
                    backtrack(end, acc + [candidate])

        result = []
        backtrack(0, [])
        return result
