class ChatGPTStack<T> {
  private elements: T[] = [];

  push(element: T): void {
    this.elements.push(element);
  }

  pop(): T | undefined {
    return this.elements.pop();
  }

  isEmpty(): boolean {
    return this.elements.length === 0;
  }

  print(): void {
    console.log("Contenido de la pila:", this.elements);
  }
}

// Simulación básica de interacción
const pila = new ChatGPTStack<string>();

pila.push("Elemento 1");
pila.push("Elemento 2");
pila.print();
pila.pop();
pila.print();
console.log("¿Está vacía?", pila.isEmpty());
