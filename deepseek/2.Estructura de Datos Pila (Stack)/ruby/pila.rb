class Stack
  def initialize
    @items = []
  end

  def push(item)
    @items.push(item)
  end

  def pop
    @items.pop unless is_empty?
  end

  def is_empty?
    @items.empty?
  end
end

# Interacción con el usuario
stack = Stack.new
loop do
  print "¿Desea 'push', 'pop' o 'salir'? "
  action = gets.chomp.downcase
  case action
  when "salir"
    break
  when "push"
    print "Ingrese el valor a apilar: "
    item = gets.chomp
    stack.push(item)
  when "pop"
    popped = stack.pop
    puts popped ? "Elemento desapilado: #{popped}" : "La pila está vacía"
  end
end