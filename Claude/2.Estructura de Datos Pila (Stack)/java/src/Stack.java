import java.util.ArrayList;
import java.util.Scanner;

public class Stack<T> {
    private ArrayList<T> items;
    
    public Stack() {
        this.items = new ArrayList<>();
    }
    
    public void push(T item) {
        items.add(item);
        System.out.println("Elemento " + item + " agregado a la pila");
    }
    
    public T pop() {
        if (isEmpty()) {
            throw new RuntimeException("La pila está vacía");
        }
        T item = items.remove(items.size() - 1);
        System.out.println("Elemento " + item + " removido de la pila");
        return item;
    }
    
    public boolean isEmpty() {
        return items.isEmpty();
    }
    
    public T peek() {
        if (isEmpty()) {
            return null;
        }
        return items.get(items.size() - 1);
    }
    
    public int size() {
        return items.size();
    }
    
    public static void main(String[] args) {
        Stack<String> stack = new Stack<>();
        Scanner scanner = new Scanner(System.in);
        
        while (true) {
            System.out.println("\n--- Operaciones de Pila ---");
            System.out.println("1. Push (Agregar)");
            System.out.println("2. Pop (Remover)");
            System.out.println("3. Verificar si está vacía");
            System.out.println("4. Ver tope");
            System.out.println("5. Salir");
            
            System.out.print("Seleccione una opción: ");
            int choice = scanner.nextInt();
            scanner.nextLine(); // Consumir nueva línea
            
            switch (choice) {
                case 1:
                    System.out.print("Ingrese el valor a agregar: ");
                    String value = scanner.nextLine();
                    stack.push(value);
                    break;
                case 2:
                    try {
                        stack.pop();
                    } catch (RuntimeException e) {
                        System.out.println(e.getMessage());
                    }
                    break;
                case 3:
                    System.out.println("¿Está vacía?: " + stack.isEmpty());
                    break;
                case 4:
                    String top = stack.peek();
                    System.out.println("Tope: " + (top != null ? top : "Pila vacía"));
                    break;
                case 5:
                    return;
            }
        }
    }
}