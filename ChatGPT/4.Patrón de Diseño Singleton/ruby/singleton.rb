class Singleton
  @@instance = nil
  def self.instance
    @@instance ||= new
  end
  private_class_method :new
end

s1 = Singleton.instance
s2 = Singleton.instance
puts "ID instancia s1: #{s1.object_id}"
puts "ID instancia s2: #{s2.object_id}"
puts "¿Misma instancia? #{s1.equal?(s2)}"
