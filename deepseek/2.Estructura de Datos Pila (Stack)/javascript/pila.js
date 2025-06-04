class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (!this.isEmpty()) {
            return this.items.pop();
        }
        return null;
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

// Interacción con el usuario
const stack = new Stack();
while (true) {
    const action = prompt("¿Desea 'push', 'pop' o 'salir'?").toLowerCase();
    if (action === "salir") {
        break;
    } else if (action === "push") {
        const item = prompt("Ingrese el valor a apilar:");
        stack.push(item);
    } else if (action === "pop") {
        const popped = stack.pop();
        alert(popped ? `Elemento desapilado: ${popped}` : "La pila está vacía");
    }
}