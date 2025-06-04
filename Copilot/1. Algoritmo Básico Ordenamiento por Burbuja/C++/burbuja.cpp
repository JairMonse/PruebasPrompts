#include <iostream>
#include <vector>
#include <sstream>
using namespace std;

void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n-1; i++)
        for (int j = 0; j < n-i-1; j++)
            (arr[j] > arr[j+1])
                swap(arr[j], arr[j+1]);
}

int main() {
    cout << "Ingresa números separados por espacio: ";
    string line;
    getline(cin, line);
    stringstream ss(line);
    int num;
    vector<int> arr;

    while (ss >> num) arr.push_back(num);

    bubbleSort(arr);

    cout << "Lista ordenada: ";
    for (int n : arr) cout << n << " ";
    cout << endl;
    return 0;
}
