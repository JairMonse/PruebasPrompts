import java.util.Arrays;
import java.util.Scanner;

public class Burbuja {
    public static void Burbuja(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n-1; i++) {
            for (int j = 0; j < n-i-1; j++) {
                if (arr[j] > arr[j+1]) {
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Ingrese números separados por espacios: ");
        String[] input = scanner.nextLine().split(" ");
        int[] numbers = Arrays.stream(input).mapToInt(Integer::parseInt).toArray();
        Burbuja(numbers);
        System.out.println("Lista ordenada: " + Arrays.toString(numbers));
    }
}