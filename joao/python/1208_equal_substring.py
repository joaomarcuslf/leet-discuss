class Solution:
    def equalSubstring(self, s: str, t: str, maxCost: int) -> int:
      st = 0
      tt_cst = 0
      mx_len = 0
      
      for en in range(len(s)):
          tt_cst += abs(ord(s[en]) - ord(t[en]))
          
          while tt_cst > maxCost:
              tt_cst -= abs(ord(s[st]) - ord(t[st]))
              st += 1
            
          mx_len = max(mx_len, en - st + 1)
      
      return mx_len
