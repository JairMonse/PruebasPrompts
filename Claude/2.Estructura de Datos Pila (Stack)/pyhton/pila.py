class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        """Agregar elemento al tope de la pila"""
        self.items.append(item)
        print(f"Elemento {item} agregado a la pila")
    
    def pop(self):
        """Remover y retornar el elemento del tope"""
        if self.is_empty():
            raise IndexError("La pila está vacía")
        item = self.items.pop()
        print(f"Elemento {item} removido de la pila")
        return item
    
    def is_empty(self):
        """Verificar si la pila está vacía"""
        return len(self.items) == 0
    
    def peek(self):
        """Ver el elemento del tope sin removerlo"""
        if self.is_empty():
            return None
        return self.items[-1]
    
    def size(self):
        """Obtener el tamaño de la pila"""
        return len(self.items)

# Ejemplo de uso interactivo
def main():
    stack = Stack()
    
    while True:
        print("\n--- Operaciones de Pila ---")
        print("1. Push (Agregar)")
        print("2. Pop (Remover)")
        print("3. Verificar si está vacía")
        print("4. Ver tope")
        print("5. Salir")
        
        choice = input("Seleccione una opción: ")
        
        if choice == '1':
            value = input("Ingrese el valor a agregar: ")
            stack.push(value)
        elif choice == '2':
            try:
                stack.pop()
            except IndexError as e:
                print(e)
        elif choice == '3':
            print(f"¿Está vacía?: {stack.is_empty()}")
        elif choice == '4':
            top = stack.peek()
            print(f"Tope: {top if top else 'Pila vacía'}")
        elif choice == '5':
            break

if __name__ == "__main__":
    main()