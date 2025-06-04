import java.util.*;

class StackCustom {
    private Stack<String> stack = new Stack<>();

    public void push(String item) {
        stack.push(item);
    }

    public String pop() {
        return stack.isEmpty() ? "Pila vacía" : stack.pop();
    }

    public boolean isEmpty() {
        return stack.isEmpty();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        StackCustom stack = new StackCustom();
        while (true) {
            System.out.print("Elige una opción (push, pop, salir): ");
            String op = sc.nextLine();
            if (op.equals("push")) {
                System.out.print("Valor a agregar: ");
                stack.push(sc.nextLine());
            } else if (op.equals("pop")) {
                System.out.println("Elemento eliminado: " + stack.pop());
            } else if (op.equals("salir")) {
                break;
            }
        }
    }
}
