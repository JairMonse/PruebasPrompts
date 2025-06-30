function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Simulación de entrada del usuario
const input = prompt("Ingresa números separados por coma: ");
if (input) {
    const numbers = input.split(",").map(Number);
    const sorted = bubbleSort(numbers);
    console.log("Ordenado:", sorted);
}
