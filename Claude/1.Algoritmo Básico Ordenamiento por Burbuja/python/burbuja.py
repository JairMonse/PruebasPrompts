def bubble_sort(arr):
    """
    Implementación del algoritmo de ordenamiento burbuja.
    Complejidad temporal: O(n²)
    Complejidad espacial: O(1)
    """
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr

# Ejemplo de uso
numbers = [64, 34, 25, 12, 22, 11, 90]
sorted_numbers = bubble_sort(numbers.copy())
print(f"Array original: {numbers}")
print(f"Array ordenado: {sorted_numbers}")