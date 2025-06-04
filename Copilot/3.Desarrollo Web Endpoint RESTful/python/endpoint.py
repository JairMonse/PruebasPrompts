class Singleton:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            print("Instancia creada")
            cls._instance = super(Singleton, cls).__new__(cls)
        return cls._instance

# Método de prueba
if __name__ == "__main__":
    a = Singleton()
    b = Singleton()
    print("¿Es la misma instancia? " + str(a is b))
