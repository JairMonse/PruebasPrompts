package main

import "fmt"

type Singleton struct{}

var instance *Singleton

func GetInstance() *Singleton {
    if instance == nil {
        instance = &Singleton{}
    }
    return instance
}

func main() {
    s1 := GetInstance()
    s2 := GetInstance()
    fmt.Println("¿s1 y s2 son la misma instancia?", s1 == s2)
}