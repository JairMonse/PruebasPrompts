package main
import (
    "fmt"
    "sync"
)

type singleton struct{}
var instance *singleton
var once sync.Once

func GetInstance() *singleton {
    once.Do(func() {
        instance = &singleton{}
    })
    return instance
}

func main() {
    s1 := GetInstance()
    s2 := GetInstance()
    fmt.Printf("Puntero s1: %p\n", s1)
    fmt.Printf("Puntero s2: %p\n", s2)
    fmt.Println("¿Misma instancia?", s1 == s2)
}
