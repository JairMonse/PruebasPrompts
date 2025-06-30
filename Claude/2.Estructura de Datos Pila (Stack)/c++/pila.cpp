#include <iostream>
#include <vector>
#include <stdexcept>
#include <string>

template<typename T>
class Stack {
private:
    std::vector<T> items;
    
public:
    void push(const T& item) {
        items.push_back(item);
        std::cout << "Elemento " << item << " agregado a la pila" << std::endl;
    }
    
    T pop() {
        if (isEmpty()) {
            throw std::runtime_error("La pila está vacía");
        }
        T item = items.back();
        items.pop_back();
        std::cout << "Elemento " << item << " removido de la pila" << std::endl;
        return item;
    }
    
    bool isEmpty() const {
        return items.empty();
    }
    
    T peek() const {
        if (isEmpty()) {
            throw std::runtime_error("La pila está vacía");
        }
        return items.back();
    }
    
    size_t size() const {
        return items.size();
    }
};

int main() {
    Stack<std::string> stack;
    int choice;
    std::string value;
    
    while (true) {
        std::cout << "\n--- Operaciones de Pila ---" << std::endl;
        std::cout << "1. Push (Agregar)" << std::endl;
        std::cout << "2. Pop (Remover)" << std::endl;
        std::cout << "3. Verificar si está vacía" << std::endl;
        std::cout << "4. Ver tope" << std::endl;
        std::cout << "5. Salir" << std::endl;
        
        std::cout << "Seleccione una opción: ";
        std::cin >> choice;
        
        switch (choice) {
            case 1:
                std::cout << "Ingrese el valor a agregar: ";
                std::cin >> value;
                stack.push(value);
                break;
            case 2:
                try {
                    stack.pop();
                } catch (const std::runtime_error& e) {
                    std::cout << e.what() << std::endl;
                }
                break;
            case 3:
                std::cout << "¿Está vacía?: " << (stack.isEmpty() ? "Sí" : "No") << std::endl;
                break;
            case 4:
                try {
                    std::cout << "Tope: " << stack.peek() << std::endl;
                } catch (const std::runtime_error& e) {
                    std::cout << "Pila vacía" << std::endl;
                }
                break;
            case 5:
                return 0;
        }
    }
}