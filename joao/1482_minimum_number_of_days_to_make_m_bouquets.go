func minDays(bloomDay []int, m int, k int) int {
	n := len(bloomDay)

	if m*k > n {
		return -1
	}

	l := slices.Min(bloomDay)
	r := slices.Max(bloomDay)

	for l < r {
		m := l + (r-l)/2

		acc := 0
		f := 0

		for _, b := range bloomDay {
			if b <= m {
				f++
				if f == k {
					acc++
					f = 0
				}
			} else {
				f = 0
			}
		}

		if acc >= m {
			r = m
		} else {
			l = m + 1
		}
	}

	return l
}
