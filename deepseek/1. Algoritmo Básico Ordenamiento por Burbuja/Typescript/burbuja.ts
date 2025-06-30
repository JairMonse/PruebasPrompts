function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Intercambiar elementos
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Interacción con el usuario
const input = prompt("Ingrese números separados por comas:") || "";
const numbers = input.split(',').map(num => parseInt(num.trim()));
const sortedNumbers = bubbleSort(numbers);
console.log("Array ordenado:", sortedNumbers);