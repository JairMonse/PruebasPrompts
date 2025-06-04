require 'sinatra'
require 'json'
get '/saludo' do
  nombre = params['nombre'] || ''
  content_type :json
  { mensaje: "Hola, #{nombre}" }.to_json
end

# Prueba con:
# curl "http://localhost:4567/saludo?nombre=Juan"
