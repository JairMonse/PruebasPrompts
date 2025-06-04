class Pila:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if not self.is_empty():
            return self.items.pop()
        else:
            return "La pila está vacía"

    def is_empty(self):
        return len(self.items) == 0

pila = Pila()

while True:
    accion = input("Ingrese una acción (push <elemento>, pop, verificar, salir): ").split()
    comando = accion[0].lower()

    if comando == "push":
        if len(accion) > 1:
            elemento = accion[1]
            pila.push(elemento)
            print(f"Se agregó '{elemento}' a la pila.")
        else:
            print("Por favor, especifique el elemento a agregar.")
    elif comando == "pop":
        elemento = pila.pop()
        print(f"Se extrajo '{elemento}' de la pila.")
    elif comando == "verificar":
        if pila.is_empty():
            print("La pila está vacía.")
        else:
            print("La pila no está vacía.")
    elif comando == "salir":
        break
    else:
        print("Comando no válido.")