class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if not self.is_empty():
            return self.items.pop()
        return None

    def is_empty(self):
        return len(self.items) == 0

# Interacción con el usuario
stack = Stack()
while True:
    action = input("¿Desea 'push', 'pop' o 'salir'? ").lower()
    if action == "salir":
        break
    elif action == "push":
        item = input("Ingrese el valor a apilar: ")
        stack.push(item)
    elif action == "pop":
        popped = stack.pop()
        print(f"Elemento desapilado: {popped}" if popped else "La pila está vacía")