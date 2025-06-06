package main

import "fmt"

// BubbleSort implementa el algoritmo de ordenamiento burbuja
func BubbleSort(arr []int) []int {
    // Crear copia del slice para no modificar el original
    sorted := make([]int, len(arr))
    copy(sorted, arr)
    
    n := len(sorted)
    
    for i := 0; i < n-1; i++ {
        swapped := false
        for j := 0; j < n-i-1; j++ {
            if sorted[j] > sorted[j+1] {
                sorted[j], sorted[j+1] = sorted[j+1], sorted[j]
                swapped = true
            }
        }
        if !swapped {
            break
        }
    }
    
    return sorted
}

func main() {
    numbers := []int{64, 34, 25, 12, 22, 11, 90}
    sorted := BubbleSort(numbers)
    
    fmt.Printf("Array original: %v\n", numbers)
    fmt.Printf("Array ordenado: %v\n", sorted)
}