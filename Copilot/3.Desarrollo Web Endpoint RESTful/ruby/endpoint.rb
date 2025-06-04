class Singleton
  @@instance = nil

  def self.instance
    @@instance ||= new
  end

  private_class_method :new
end

a = Singleton.instance
b = Singleton.instance
puts "¿Es la misma instancia? #{a.equal?(b)}"
