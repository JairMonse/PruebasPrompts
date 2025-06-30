#include <iostream>
#include <string>
#include <mutex>
#include <thread>

class Singleton {
private:
    static Singleton* instance;
    static std::mutex mtx;
    std::string data;
    
    Singleton() {
        data = "Instancia Singleton";
    }
    
public:
    static Singleton* getInstance() {
        std::lock_guard<std::mutex> lock(mtx);
        if (instance == nullptr) {
            instance = new Singleton();
        }
        return instance;
    }
    
    std::string getData() const {
        return data;
    }
    
    void setData(const std::string& newData) {
        data = newData;
    }
    
    // Eliminar constructor de copia y operador de asignación
    Singleton(const Singleton&) = delete;
    Singleton& operator=(const Singleton&) = delete;
};

// Definición de miembros estáticos
Singleton* Singleton::instance = nullptr;
std::mutex Singleton::mtx;

void testSingleton() {
    std::cout << "=== Prueba del Patrón Singleton ===" << std::endl;
    
    // Crear instancias
    Singleton* instance1 = Singleton::getInstance();
    Singleton* instance2 = Singleton::getInstance();
    
    // Verificar que sean la misma instancia
    std::cout << "instance1 dirección: " << instance1 << std::endl;
    std::cout << "instance2 dirección: " << instance2 << std::endl;
    std::cout << "instance1 == instance2: " << (instance1 == instance2) << std::endl;
    
    // Modificar datos en una instancia
    instance1->setData("Datos modificados");
    std::cout << "Datos en instance2: " << instance2->getData() << std::endl;
}

void testMultipleThreads() {
    std::cout << "\n=== Prueba con Múltiples Hilos ===" << std::endl;
    
    std::thread thread1([]() {
        Singleton* instance = Singleton::getInstance();
        std::cout << "Thread 1 - Instancia: " << instance << std::endl;
    });
    
    std::thread thread2([]() {
        Singleton* instance = Singleton::getInstance();
        std::cout << "Thread 2 - Instancia: " << instance << std::endl;
    });
    
    thread1.join();
    thread2.join();
}

int main() {
    testSingleton();
    testMultipleThreads();
    return 0;
}