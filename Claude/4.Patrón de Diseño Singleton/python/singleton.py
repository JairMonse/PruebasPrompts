class Singleton:
    _instance = None
    _initialized = False
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(Singleton, cls).__new__(cls)
        return cls._instance
    
    def __init__(self):
        if not self._initialized:
            self.data = "Instancia Singleton"
            self._initialized = True
    
    @classmethod
    def get_instance(cls):
        if cls._instance is None:
            cls._instance = cls()
        return cls._instance
    
    def get_data(self):
        return self.data
    
    def set_data(self, data):
        self.data = data

# Prueba del patrón Singleton
def test_singleton():
    print("=== Prueba del Patrón Singleton ===")
    
    # Crear instancias
    instance1 = Singleton()
    instance2 = Singleton()
    instance3 = Singleton.get_instance()
    
    # Verificar que sean la misma instancia
    print(f"instance1 id: {id(instance1)}")
    print(f"instance2 id: {id(instance2)}")
    print(f"instance3 id: {id(instance3)}")
    
    print(f"instance1 es instance2: {instance1 is instance2}")
    print(f"instance1 es instance3: {instance1 is instance3}")
    
    # Modificar datos en una instancia
    instance1.set_data("Datos modificados")
    print(f"Datos en instance2: {instance2.get_data()}")
    print(f"Datos en instance3: {instance3.get_data()}")

test_singleton()