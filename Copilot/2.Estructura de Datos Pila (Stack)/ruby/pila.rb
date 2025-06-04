class Stack
  def initialize
    @items = []
  end

  def push(item)
    @items.push(item)
  end

  def pop
    @items.empty? ? "Pila vacía" : @items.pop
  end

  def empty?
    @items.empty?
  end
end

stack = Stack.new
loop do
  print "Elige una opción (push, pop, salir): "
  op = gets.chomp
  case op
  when "push"
    print "Valor a agregar: "
    stack.push(gets.chomp)
  when "pop"
    puts "Elemento eliminado: #{stack.pop}"
  when "salir"
    break
  end
end
