var checkBouquetViability func(day int) bool
var doBinarySearch func(left, right int) int

func minDays(bloomDay []int, m int, k int) int {
    n := len(bloomDay)
    
    if m * k > n {
        return -1
    }

    checkBouquetViability = func(day int) bool {
        bouquets := 0
        flowers := 0
        
        for _, bloom := range bloomDay {
            if bloom <= day {
                flowers++
                if flowers == k {
                    bouquets++
                    flowers = 0
                }
            } else {
                flowers = 0
            }
        }
        return bouquets >= m
    }
    
    doBinarySearch = func(left, right int) int {
        if left >= right {
            return left
        }
        
        mid := left + (right - left) / 2
        if checkBouquetViability(mid) {
            return doBinarySearch(left, mid)
        } else {
            return doBinarySearch(mid + 1, right)
        }
    }
    
    l := slices.Min(bloomDay)
	r := slices.Max(bloomDay)

    return doBinarySearch(l, r)
}
