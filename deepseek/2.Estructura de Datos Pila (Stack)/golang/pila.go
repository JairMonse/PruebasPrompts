package main

import (
	"fmt"
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
		return ""
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
	for {
		fmt.Print("¿Desea 'push', 'pop' o 'salir'? ")
		var action string
		fmt.Scanln(&action)
		action = strings.ToLower(action)
		if action == "salir" {
			break
		} else if action == "push" {
			fmt.Print("Ingrese el valor a apilar: ")
			var item string
			fmt.Scanln(&item)
			stack.Push(item)
		} else if action == "pop" {
			popped := stack.Pop()
			if popped != "" {
				fmt.Println("Elemento desapilado:", popped)
			} else {
				fmt.Println("La pila está vacía")
			}
		}
	}
}