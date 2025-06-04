class Singleton:
    _instance = None
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(Singleton, cls).__new__(cls)
        return cls._instance

if __name__ == "__main__":
    s1 = Singleton()
    s2 = Singleton()
    print("ID instancia s1:", id(s1))
    print("ID instancia s2:", id(s2))
    print("¿Misma instancia?", s1 is s2)
