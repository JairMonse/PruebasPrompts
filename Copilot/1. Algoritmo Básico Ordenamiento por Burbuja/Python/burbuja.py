def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

nums = list(map(int, input("Ingresa números separados por espacio: ").split()))
print("Lista ordenada:", bubble_sort(nums))
