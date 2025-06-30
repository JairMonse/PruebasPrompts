class NumberStack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    print(): void {
        console.log("Pila actual:", this.items);
    }
}

// Interacción con el usuario
const numberStack = new NumberStack<number>();
while (true) {
    const action = prompt("¿Qué desea hacer? (push/pop/salir):")?.toLowerCase();
    
    if (action === 'salir') break;
    
    switch (action) {
        case 'push':
            const value = parseInt(prompt("Ingrese un número:") || "0");
            numberStack.push(value);
            break;
        case 'pop':
            const popped = numberStack.pop();
            console.log("Elemento eliminado:", popped);
            break;
        default:
            console.log("Acción no válida");
    }
    numberStack.print();
}