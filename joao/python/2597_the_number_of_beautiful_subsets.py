class Solution(object):
    def beautifulSubsets(self, nums: List[int], k: int) -> int:
        def is_beautiful(count: dict, n: int) -> bool:
            return count.get(n + k, 0) == 0 and count.get(n - k, 0) == 0
        
        def backtrack(index: int, count: dict) -> None:
            nonlocal beautiful_count

            if index >= len(nums):
                beautiful_count += 1
                return

            backtrack(index + 1, count)

            if is_beautiful(count, nums[index]):
                count[nums[index]] = count.get(nums[index], 0) + 1
                backtrack(index + 1, count)
                count[nums[index]] -= 1
                if count[nums[index]] == 0:
                    del count[nums[index]]

        beautiful_count = -1
        count = {}
        backtrack(0, count)
        return beautiful_count
