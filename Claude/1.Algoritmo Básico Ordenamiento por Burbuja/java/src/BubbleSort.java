public class BubbleSort {
    /**
     * Implementación del algoritmo de ordenamiento burbuja
     * @param arr Array de enteros a ordenar
     * @return Array ordenado
     */
    public static int[] bubbleSort(int[] arr) {
        int n = arr.length;
        int[] sortedArr = arr.clone();
        
        for (int i = 0; i < n - 1; i++) {
            boolean swapped = false;
            for (int j = 0; j < n - i - 1; j++) {
                if (sortedArr[j] > sortedArr[j + 1]) {
                    // Intercambio de elementos
                    int temp = sortedArr[j];
                    sortedArr[j] = sortedArr[j + 1];
                    sortedArr[j + 1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) break;
        }
        return sortedArr;
    }
    
    public static void main(String[] args) {
        int[] numbers = {64, 34, 25, 12, 22, 11, 90};
        int[] sorted = bubbleSort(numbers);
        
        System.out.print("Array original: ");
        for (int num : numbers) System.out.print(num + " ");
        System.out.print("\nArray ordenado: ");
        for (int num : sorted) System.out.print(num + " ");
    }
}