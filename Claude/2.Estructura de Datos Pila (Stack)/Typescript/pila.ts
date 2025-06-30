class MyStack<T> {
    private items: T[] = [];

    push(element: T): void {
        this.items.push(element);
        console.log(`Elemento "${element}" agregado a la pila.`);
    }

    pop(): T {
        if (this.isEmpty()) {
            throw new Error("La pila está vacía. No se puede realizar 'pop'.");
        }
        const item = this.items.pop() as T;
        console.log(`Elemento "${item}" removido de la pila.`);
        return item;
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    peek(): T | undefined {
        return this.items.at(-1); // Equivalente a items[items.length - 1]
    }

    size(): number {
        return this.items.length;
    }
}

// === Demostración de uso ===
function demonstrateStack(): void {
    const stack = new MyStack<string>();

    console.log("=== DEMOSTRACIÓN DE PILA ===");

    stack.push("Elemento 1");
    stack.push("Elemento 2");
    stack.push("Elemento 3");

    console.log(`¿Está vacía?: ${stack.isEmpty()}`);
    console.log(`Elemento en el tope: ${stack.peek()}`);
    console.log(`Tamaño de la pila: ${stack.size()}`);

    stack.pop();
    stack.pop();

    console.log(`Elemento en el tope tras dos 'pop': ${stack.peek()}`);
    console.log(`¿Está vacía?: ${stack.isEmpty()}`);
    console.log(`Tamaño actual: ${stack.size()}`);
}

demonstrateStack();
