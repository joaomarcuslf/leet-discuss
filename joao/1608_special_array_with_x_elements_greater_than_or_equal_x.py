class Solution:
    def specialArray(self, nums: List[int]) -> int:
        nums.sort()
        n = len(nums)
        
        left, right = 0, n
        
        while left <= right:
            mid = (left + right) // 2
            count = sum(1 for num in nums if num >= mid)
            
            if count == mid:
                return mid
            elif count < mid:
                right = mid - 1
            else:
                left = mid + 1
        
        return -1
        
