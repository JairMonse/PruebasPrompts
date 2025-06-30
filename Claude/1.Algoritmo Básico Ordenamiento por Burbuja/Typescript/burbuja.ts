function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        
        if (!swapped) break;
    }
    
    return arr;
}

// Ejemplo de uso
const numeros: number[] = [64, 34, 25, 12, 22, 11, 90];
console.log("Array original:", numeros);
bubbleSort(numeros);
console.log("Array ordenado:", numeros);