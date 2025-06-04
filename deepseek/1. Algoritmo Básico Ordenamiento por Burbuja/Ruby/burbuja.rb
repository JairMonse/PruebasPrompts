def bubble_sort(arr)
  n = arr.length
  (0...n).each do |i|
    (0...n-i-1).each do |j|
      if arr[j] > arr[j+1]
        arr[j], arr[j+1] = arr[j+1], arr[j]
      end
    end
  end
  arr
end

print "Ingrese números separados por espacios: "
input = gets.chomp
numbers = input.split.map(&:to_i)
sorted_numbers = bubble_sort(numbers)
puts "Lista ordenada: #{sorted_numbers.join(', ')}"