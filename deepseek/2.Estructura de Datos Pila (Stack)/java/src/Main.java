import java.util.Scanner;
import java.util.Stack;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Stack<String> stack = new Stack<>();
        while (true) {
            System.out.print("¿Desea 'push', 'pop' o 'salir'? ");
            String action = scanner.nextLine().toLowerCase();
            if (action.equals("salir")) {
                break;
            } else if (action.equals("push")) {
                System.out.print("Ingrese el valor a apilar: ");
                String item = scanner.nextLine();
                stack.push(item);
            } else if (action.equals("pop")) {
                if (!stack.isEmpty()) {
                    System.out.println("Elemento desapilado: " + stack.pop());
                } else {
                    System.out.println("La pila está vacía");
                }
            }
        }
    }
}