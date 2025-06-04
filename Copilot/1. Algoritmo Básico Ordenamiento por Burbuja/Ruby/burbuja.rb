puts "Ingresa números separados por espacio:"
arr gets.chomp.split.map(&:to_i)

(arr.length - 1).times do |i|
  (arr.length - i - 1).times do |j|
    arr[j], arr[j+1] = arr[j+1], arr[j] if arr[j] > arr[j+1]
  end
end

puts "Lista ordenada: #{arr.join(' ')}"
