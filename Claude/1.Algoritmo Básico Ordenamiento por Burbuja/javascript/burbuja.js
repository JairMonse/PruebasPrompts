/**
 * Implementación del algoritmo de ordenamiento burbuja
 * @param {number[]} arr - Array de números enteros
 * @returns {number[]} Array ordenado
 */
function bubbleSort(arr) {
    const sortedArr = [...arr];
    const n = sortedArr.length;
    
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (sortedArr[j] > sortedArr[j + 1]) {
                [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return sortedArr;
}

// Ejemplo de uso
const numbers = [64, 34, 25, 12, 22, 11, 90];
const sorted = bubbleSort(numbers);
console.log('Array original:', numbers);
console.log('Array ordenado:', sorted);