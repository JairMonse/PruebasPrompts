#include <iostream>
using namespace std;

class Singleton {
private:
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
    Singleton* a = Singleton::getInstance();
    Singleton* b = Singleton::getInstance();
    cout << "¿Es la misma instancia? " << (a == b ? "Sí" : "No") << endl;
    return 0;
}
