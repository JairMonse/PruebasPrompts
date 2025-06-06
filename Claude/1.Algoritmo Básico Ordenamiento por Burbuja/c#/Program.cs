using System;

public class BubbleSort
{
    /// <summary>
    /// Implementación del algoritmo de ordenamiento burbuja
    /// </summary>
    /// <param name="arr">Array de enteros a ordenar</param>
    /// <returns>Array ordenado</returns>
    public static int[] Sort(int[] arr)
    {
        int[] sortedArr = new int[arr.Length];
        Array.Copy(arr, sortedArr, arr.Length);
        int n = sortedArr.Length;
        
        for (int i = 0; i < n - 1; i++)
        {
            bool swapped = false;
            for (int j = 0; j < n - i - 1; j++)
            {
                if (sortedArr[j] > sortedArr[j + 1])
                {
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
    
    public static void Main()
    {
        int[] numbers = {64, 34, 25, 12, 22, 11, 90};
        int[] sorted = Sort(numbers);
        
        Console.Write("Array original: ");
        Console.WriteLine(string.Join(" ", numbers));
        Console.Write("Array ordenado: ");
        Console.WriteLine(string.Join(" ", sorted));
    }
}