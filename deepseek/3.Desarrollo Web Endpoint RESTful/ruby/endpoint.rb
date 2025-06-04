class Singleton
  @@instance = nil

  def self.instance
    @@instance ||= Singleton.new
  end

  private_class_method :new
end

# Prueba
s1 = Singleton.instance
s2 = Singleton.instance
puts "¿s1 y s2 son la misma instancia? #{s1 == s2}"