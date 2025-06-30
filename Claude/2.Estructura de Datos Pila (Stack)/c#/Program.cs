using System;
using System.Collections.Generic;

public class Stack<T>
{
    private List<T> items;
    
    public Stack()
    {
        items = new List<T>();
    }
    
    public void Push(T item)
    {
        items.Add(item);
        Console.WriteLine($"Elemento {item} agregado a la pila");
    }
    
    public T Pop()
    {
        if (IsEmpty())
        {
            throw new InvalidOperationException("La pila está vacía");
        }
        
        T item = items[items.Count - 1];
        items.RemoveAt(items.Count - 1);
        Console.WriteLine($"Elemento {item} removido de la pila");
        return item;
    }
    
    public bool IsEmpty()
    {
        return items.Count == 0;
    }
    
    public T Peek()
    {
        if (IsEmpty())
        {
            return default(T);
        }
        return items[items.Count - 1];
    }
    
    public int Size()
    {
        return items.Count;
    }
    
    static void Main()
    {
        Stack<string> stack = new Stack<string>();
        
        while (true)
        {
            Console.WriteLine("\n--- Operaciones de Pila ---");
            Console.WriteLine("1. Push (Agregar)");
            Console.WriteLine("2. Pop (Remover)");
            Console.WriteLine("3. Verificar si está vacía");
            Console.WriteLine("4. Ver tope");
            Console.WriteLine("5. Salir");
            
            Console.Write("Seleccione una opción: ");
            string choice = Console.ReadLine();
            
            switch (choice)
            {
                case "1":
                    Console.Write("Ingrese el valor a agregar: ");
                    string value = Console.ReadLine();
                    stack.Push(value);
                    break;
                case "2":
                    try
                    {
                        stack.Pop();
                    }
                    catch (InvalidOperationException e)
                    {
                        Console.WriteLine(e.Message);
                    }
                    break;
                case "3":
                    Console.WriteLine($"¿Está vacía?: {stack.IsEmpty()}");
                    break;
                case "4":
                    string top = stack.Peek();
                    Console.WriteLine($"Tope: {(top != null ? top : "Pila vacía")}");
                    break;
                case "5":
                    return;
            }
        }
    }
}