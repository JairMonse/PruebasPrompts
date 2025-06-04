package main

import (
	"fmt"
	"strconv"
	"strings"
)

func bubbleSort(arr []int) []int {
	n := len(arr)
	for i := 0; i < n; i++ {
		for j := 0; j < n-i-1; j++ {
			if arr[j] > arr[j+1] {
				arr[j], arr[j+1] = arr[j+1], arr[j]
			}
		}
	}
	return arr
}

func main() {
	fmt.Print("Ingrese números separados por espacios: ")
	var input string
	fmt.Scanln(&input)
	strNumbers := strings.Fields(input)
	var numbers []int
	for _, str := range strNumbers {
		num, _ := strconv.Atoi(str)
		numbers = append(numbers, num)
	}
	sortedNumbers := bubbleSort(numbers)
	fmt.Println("Lista ordenada:", sortedNumbers)
}