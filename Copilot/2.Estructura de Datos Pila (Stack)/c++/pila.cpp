#include <iostream>
#include <stack>
#include <string>
using namespace std;

int main() {
    stack<string> pila;
    string opcion, valor;

    while (true) {
        cout << "Elige una opción (push, pop, salir): ";
        cin >> opcion;
        if (opcion == "push") {
            cout << "Valor a agregar: ";
            cin >> valor;
            pila.push(valor);
        } else if (opcion == "pop") {
            if (!pila.empty()) {
                cout << "Elemento eliminado: " << pila.top() << endl;
                pila.pop();
            } else {
                cout << "Pila vacía" << endl;
            }
        } else if (opcion == "salir") {
            break;
        }
    }
    return 0;
}
