class Stack {
    constructor() {
        this.items = [];
    }
    
    push(element) {
        this.items.push(element);
        console.log(`Elemento ${element} agregado a la pila`);
    }
    
    pop() {
        if (this.isEmpty()) {
            throw new Error("La pila está vacía");
        }
        const item = this.items.pop();
        console.log(`Elemento ${item} removido de la pila`);
        return item;
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }
    
    size() {
        return this.items.length;
    }
}

// Simulación de uso interactivo
const stack = new Stack();

function demonstrateStack() {
    console.log("=== Demostración de Pila ===");
    
    // Agregar elementos
    stack.push("Elemento 1");
    stack.push("Elemento 2");
    stack.push("Elemento 3");
    
    console.log(`¿Está vacía?: ${stack.isEmpty()}`);
    console.log(`Tope: ${stack.peek()}`);
    console.log(`Tamaño: ${stack.size()}`);
    
    // Remover elementos
    stack.pop();
    stack.pop();
    
    console.log(`Tope después de pop: ${stack.peek()}`);
    console.log(`¿Está vacía?: ${stack.isEmpty()}`);
}

demonstrateStack();