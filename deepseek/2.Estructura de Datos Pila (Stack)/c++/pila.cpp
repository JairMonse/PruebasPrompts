#include <iostream>
#include <stack>
#include <string>
using namespace std;

int main() {
    stack<string> s;
    while (true) {
        cout << "¿Desea 'push', 'pop' o 'salir'? ";
        string action;
        cin >> action;
        if (action == "salir") {
            break;
        } else if (action == "push") {
            cout << "Ingrese el valor a apilar: ";
            string item;
            cin >> item;
            s.push(item);
        } else if (action == "pop") {
            if (!s.empty()) {
                cout << "Elemento desapilado: " << s.top() << endl;
                s.pop();
            } else {
                cout << "La pila está vacía" << endl;
            }
        }
    }
    return 0;
}