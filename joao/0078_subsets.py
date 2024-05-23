def backtrack(res, nums, start, path):
    res.append(path[:])
    for i in range(start, len(nums)):
        path.append(nums[i])
        res = backtrack(res, nums, i + 1, path)
        path.pop()
    return res

class Solution(object):
    def subsets(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """

        res = []
        res = backtrack(res, nums, 0, [])
        return res