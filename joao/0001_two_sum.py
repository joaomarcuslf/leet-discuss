class Solution(object):
    def twoSum(self, nums, target):
        map_n = {}

        for index, num in enumerate(nums):
            complement = target - num

            if complement in map_n:
                return [map_n[complement],index]
            map_n[num] = index