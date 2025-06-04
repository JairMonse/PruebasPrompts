using System;
using System.Collections.Generic;

class StackCustom {
    private Stack<string> stack = new Stack<string>();

    public void Push(string item) => stack.Push(item);
    public string Pop() => stack.Count > 0 ? stack.Pop() : "Pila vacía";
    public bool IsEmpty() => stack.Count == 0;

    static void Main() {
        StackCustom stack = new StackCustom();
        while (true) {
            Console.Write("Elige una opción (push, pop, salir): ");
            string op = Console.ReadLine();
            if (op == "push") {
                Console.Write("Valor a agregar: ");
                stack.Push(Console.ReadLine());
            } else if (op == "pop") {
                Console.WriteLine("Elemento eliminado: " + stack.Pop());
            } else if (op == "salir") {
                break;
            }
        }
    }
}
