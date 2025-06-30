//npm i --save-dev @types/node
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function bubbleSort(arr: number[]): number[] {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      // Compara elementos adyacentes
      if (arr[j] > arr[j + 1]) {
        // Intercambia los elementos si están en el orden incorrecto
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log("--- Algoritmo de Ordenamiento por Burbuja ---");
rl.question('Ingresa números enteros separados por comas (ej: 5,2,8,1): ', (input) => {
  try {
    // Convierte el string de entrada en un arreglo de números
    const numeros = input.split(',').map(item => {
      const num = parseInt(item.trim(), 10);
      if (isNaN(num)) {
        throw new Error(`'${item.trim()}' no es un número válido.`);
      }
      return num;
    });

    console.log("Arreglo original:", numeros);
    const arregloOrdenado = bubbleSort([...numeros]); // Se pasa una copia para no modificar el original
    console.log("Arreglo ordenado:", arregloOrdenado);

  } catch (error) {
    if (error instanceof Error) {
        console.error("Error:", error.message);
    } else {
        console.error("Ocurrió un error inesperado.");
    }
  } finally {
    rl.close();
  }
});