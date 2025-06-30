class Stack<T> {
    private items: T[] = [];

    push(element: T): void {
        this.items.push(element);
        console.log(`Elemento ${element} agregado.`);
    }

    pop(): T | undefined {
        const removed = this.items.pop();
        console.log(`Elemento eliminado: ${removed}`);
        return removed;
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    print(): void {
        console.log("Contenido de la pila:", this.items.join(", "));
    }
}

// Simulación de interacción
const stack = new Stack<string>();
let option: string | null;

do {
    const input = prompt("Opciones: push, pop, print, salir");
    option = input ? input.toLowerCase() : null;
    switch (option) {
        case "push":
            const value = prompt("Ingresa un valor:");
            if (value) stack.push(value);
            break;
        case "pop":
            stack.pop();
            break;
        case "print":
            stack.print();
            break;
    }
} while (option !== "salir");
