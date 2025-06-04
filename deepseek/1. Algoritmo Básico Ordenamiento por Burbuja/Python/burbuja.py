def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

# Solicitar valores al usuario
input_str = input("Ingrese números separados por espacios: ")
numbers = list(map(int, input_str.split()))
sorted_numbers = bubble_sort(numbers)
print("Lista ordenada:", sorted_numbers)