#include <iostream>
class Singleton {
    static Singleton* instance;
    Singleton() {}
public:
    static Singleton* getInstance() {
        if (!instance)
            instance = new Singleton();
        return instance;
    }
};
Singleton* Singleton::instance = nullptr;

int main() {
    Singleton* s1 = Singleton::getInstance();
    Singleton* s2 = Singleton::getInstance();
    std::cout << "Puntero s1: " << s1 << std::endl;
    std::cout << "Puntero s2: " << s2 << std::endl;
    std::cout << "¿Misma instancia? " << (s1 == s2 ? "sí" : "no") << std::endl;
}
