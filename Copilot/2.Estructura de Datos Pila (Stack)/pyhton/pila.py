class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop() if not self.is_empty() else "Pila vacía"

    def is_empty(self):
        return len(self.items) == 0

stack = Stack()
while True:
    op = input("Elige una opción (push, pop, salir): ")
    if op == "push":
        val = input("Valor a agregar: ")
        stack.push(val)
    elif op == "pop":
        print("Elemento eliminado:", stack.pop())
    elif op == "salir":
        break
