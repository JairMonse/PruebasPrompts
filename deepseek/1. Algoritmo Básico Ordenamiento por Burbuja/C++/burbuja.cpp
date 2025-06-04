#include <iostream>
#include <vector>
#include <sstream>
using namespace std;

void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr[j], arr[j+1]);
            }
        }
    }
}

int main() {
    cout << "Ingrese números separados por espacios: ";
    string input;
    getline(cin, input);
    istringstream iss(input);
    vector<int> numbers;
    int num;
    while (iss >> num) {
        numbers.push_back(num);
    }
    bubbleSort(numbers);
    cout << "Lista ordenada: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    return 0;
}