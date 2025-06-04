package main

import (
    "bufio"
    "fmt"
    "os"
    "strconv"
    "strings"
)

func bubbleSort(arr []int) {
    n := len(arr)
    for i := 0; i < n; i++ {
        for j := 0; j < n-i-1; j++ {
            if arr[j] > arr[j+1] {
                arr[j], arr[j+1] = arr[j+1], arr[j]
            }
        }
    }
}

func main() {
    reader := bufio.NewReader(os.Stdin)
    fmt.Print("Ingresa números separados por espacio: ")
    input, _ := reader.ReadString('\n')
    input = strings.TrimSpace(input)
    parts := strings.Split(input, " ")

    var arr []int
    for _, p := range parts {
        num, _ := strconv.Atoi(p)
        arr = append(arr, num)
    }

    bubbleSort(arr)
    fmt.Println("Lista ordenada:", arr)
}
