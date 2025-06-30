function bubbleSort(arr: number[]): number[] {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Intercambio
      }
    }
  }
  return arr;
}

// Entrada del usuario
const userInput = prompt("Ingrese números separados por comas (ej: 4,2,7,1): ");
if (userInput) {
  const inputArray = userInput.split(",").map(Number);
  const sortedArray = bubbleSort(inputArray);
  console.log("Array ordenado:", sortedArray);
}
