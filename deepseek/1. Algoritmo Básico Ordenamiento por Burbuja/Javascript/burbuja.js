function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Solicitar valores al usuario
let input = prompt("Ingrese números separados por comas: ");
let numbers = input.split(',').map(Number);
let sortedNumbers = bubbleSort(numbers);
console.log("Lista ordenada:", sortedNumbers);