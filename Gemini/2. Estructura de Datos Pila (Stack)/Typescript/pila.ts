import * as readline from 'readline';

class Pila<T> {
  private elementos: T[] = [];

  // Agrega un elemento a la cima de la pila
  push(elemento: T): void {
    this.elementos.push(elemento);
  }

  // Elimina y retorna el elemento de la cima de la pila
  pop(): T | undefined {
    if (this.estaVacia()) {
      return undefined;
    }
    return this.elementos.pop();
  }

  // Verifica si la pila está vacía
  estaVacia(): boolean {
    return this.elementos.length === 0;
  }

  // Muestra el contenido actual de la pila
  verPila(): void {
    console.log(`Pila actual: [${this.elementos.join(', ')}]`);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const miPila = new Pila<string>();

function menu() {
  console.log("\n--- Menú de Pila (Stack) ---");
  console.log("1. Agregar elemento (push)");
  console.log("2. Quitar elemento (pop)");
  console.log("3. Verificar si está vacía");
  console.log("4. Salir");
  miPila.verPila();

  rl.question('Elige una opción: ', (opcion) => {
    switch (opcion.trim()) {
      case '1':
        rl.question('Ingresa el elemento a agregar: ', (elemento) => {
          miPila.push(elemento);
          console.log(`'${elemento}' ha sido agregado.`);
          menu();
        });
        break;
      case '2':
        if (miPila.estaVacia()) {
          console.log("La pila ya está vacía. No se puede quitar ningún elemento.");
        } else {
          const elementoQuitado = miPila.pop();
          console.log(`Elemento quitado: '${elementoQuitado}'`);
        }
        menu();
        break;
      case '3':
        console.log(miPila.estaVacia() ? "La pila está vacía." : "La pila no está vacía.");
        menu();
        break;
      case '4':
        rl.close();
        break;
      default:
        console.log("Opción no válida. Inténtalo de nuevo.");
        menu();
        break;
    }
  });
}

console.log("--- Estructura de Datos: Pila (Stack) ---");
menu();