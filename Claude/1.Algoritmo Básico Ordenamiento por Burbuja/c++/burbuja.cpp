#include <iostream>
#include <vector>
#include <algorithm>

class BubbleSort {
public:
    /**
     * Implementación del algoritmo de ordenamiento burbuja
     * @param arr Vector de enteros a ordenar
     * @return Vector ordenado
     */
    static std::vector<int> sort(std::vector<int> arr) {
        int n = arr.size();
        
        for (int i = 0; i < n - 1; i++) {
            bool swapped = false;
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    std::swap(arr[j], arr[j + 1]);
                    swapped = true;
                }
            }
            if (!swapped) break;
        }
        return arr;
    }
};

int main() {
    std::vector<int> numbers = {64, 34, 25, 12, 22, 11, 90};
    std::vector<int> original = numbers;
    std::vector<int> sorted = BubbleSort::sort(numbers);
    
    std::cout << "Array original: ";
    for (int num : original) std::cout << num << " ";
    std::cout << "\nArray ordenado: ";
    for (int num : sorted) std::cout << num << " ";
    std::cout << std::endl;
    
    return 0;
}