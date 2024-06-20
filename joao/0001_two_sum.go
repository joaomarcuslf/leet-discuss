func twoSum(nums []int, target int) []int {
	map_n := make(map[int]int)

	for index, num := range nums {
		complement := target - num

		if val, ok := map_n[complement]; ok {
			return []int{val, index}
		}
		map_n[num] = index
	}

	return []int{}
}