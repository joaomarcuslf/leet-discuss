func maxDistance(position []int, m int) int {
	sort.Ints(position)

	left, right := 1, position[len(position)-1]-position[0]
	var result int

	isPossible := func(minForce int) bool {
		count := 1
		lastPosition := position[0]
		for i := 1; i < len(position); i++ {
			if position[i]-lastPosition >= minForce {
				count++
				lastPosition = position[i]
			}
			if count >= m {
				return true
			}
		}
		return false
	}

	for left <= right {
		mid := left + (right-left)/2
		if isPossible(mid) {
			result = mid
			left = mid + 1
		} else {
			right = mid - 1
		}
	}

	return result
}