package main

import (
    "bufio"
    "fmt"
    "os"
    "strings"
)

type Stack struct {
    items []string
}

func (s *Stack) Push(item string) {
    s.items = append(s.items, item)
}

func (s *Stack) Pop() string {
    if len(s.items) == 0 {
        return "Pila vacía"
    }
    item := s.items[len(s.items)-1]
    s.items = s.items[:len(s.items)-1]
    return item
}

func (s *Stack) IsEmpty() bool {
    return len(s.items) == 0
}

func main() {
    stack := Stack{}
    reader := bufio.NewReader(os.Stdin)

    for {
        fmt.Print("Elige una opción (push, pop, salir): ")
        op, _ := reader.ReadString('\n')
        op = strings.TrimSpace(op)

        if op == "push" {
            fmt.Print("Valor a agregar: ")
            val, _ := reader.ReadString('\n')
            stack.Push(strings.TrimSpace(val))
        } else if op == "pop" {
            fmt.Println("Elemento eliminado:", stack.Pop())
        } else if op == "salir" {
            break
        }
    }
}
