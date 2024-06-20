func partition(s string) [][]string {
	var result [][]string

	isPalindrome := func(sub string) bool {
		n := len(sub)
		for i := 0; i < n/2; i++ {
			if sub[i] != sub[n-1-i] {
				return false
			}
		}
		return true
	}

	var backtrack func(start int, acc []string)
	backtrack = func(start int, acc []string) {
		if start == len(s) {
			temp := make([]string, len(acc))
			copy(temp, acc)
			result = append(result, temp)
			return
		}

		for end := start + 1; end <= len(s); end++ {
			candidate := s[start:end]
			if isPalindrome(candidate) {
				backtrack(end, append(acc, candidate))
			}
		}
	}

	backtrack(0, []string{})
	return result
}