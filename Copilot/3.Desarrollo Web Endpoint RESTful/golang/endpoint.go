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
    a := GetInstance()
    b := GetInstance()
    fmt.Println("¿Es la misma instancia?", a == b)
}
