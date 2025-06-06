#include <iostream>
#include <vector>
#include <sstream>
using namespace std;

vector<int> bubbleSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

int main() {
    cout << "Ingrese números separados por espacios:" << endl;
    string linea;
    getline(cin, linea);
    istringstream ss(linea);
    vector<int> arr;
    int x;
    while (ss >> x) arr.push_back(x);
    vector<int> ordenada = bubbleSort(arr);
    cout << "Lista ordenada: ";
    for (int v : ordenada) cout << v << " ";
    cout << endl;
    return 0;
}
