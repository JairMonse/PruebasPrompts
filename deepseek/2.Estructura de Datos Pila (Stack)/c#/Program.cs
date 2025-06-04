using System;
using System.Collections.Generic;

class Program {
    static void Main() {
        Stack<string> stack = new Stack<string>();
        while (true) {
            Console.Write("¿Desea 'push', 'pop' o 'salir'? ");
            string action = Console.ReadLine().ToLower();
            if (action == "salir") {
                break;
            } else if (action == "push") {
                Console.Write("Ingrese el valor a apilar: ");
                string item = Console.ReadLine();
                stack.Push(item);
            } else if (action == "pop") {
                if (stack.Count > 0) {
                    Console.WriteLine("Elemento desapilado: " + stack.Pop());
                } else {
                    Console.WriteLine("La pila está vacía");
                }
            }
        }
    }
}