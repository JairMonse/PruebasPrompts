def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

if __name__ == "__main__":
    entrada = input("Ingrese números separados por espacios: ")
    numeros = list(map(int, entrada.strip().split()))
    print("Lista ordenada:", bubble_sort(numeros))

