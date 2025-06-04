class Singleton:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

# Prueba
s1 = Singleton()
s2 = Singleton()
print("¿s1 y s2 son la misma instancia?", s1 is s2)