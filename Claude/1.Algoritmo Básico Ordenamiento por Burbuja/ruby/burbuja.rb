# Clase para implementar ordenamiento burbuja
class BubbleSort
  # Implementación del algoritmo de ordenamiento burbuja
  # @param arr [Array<Integer>] Array de enteros a ordenar
  # @return [Array<Integer>] Array ordenado
  def self.sort(arr)
    sorted_arr = arr.dup
    n = sorted_arr.length
    
    (0...n-1).each do |i|
      swapped = false
      (0...n-i-1).each do |j|
        if sorted_arr[j] > sorted_arr[j+1]
          sorted_arr[j], sorted_arr[j+1] = sorted_arr[j+1], sorted_arr[j]
          swapped = true
        end
      end
      break unless swapped
    end
    
    sorted_arr
  end
end

# Ejemplo de uso
numbers = [64, 34, 25, 12, 22, 11, 90]
sorted_numbers = BubbleSort.sort(numbers)

puts "Array original: #{numbers}"
puts "Array ordenado: #{sorted_numbers}"