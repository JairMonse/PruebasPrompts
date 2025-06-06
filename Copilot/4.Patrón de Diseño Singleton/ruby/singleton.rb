require 'sinatra'

get '/saludo' do
  nombre = params['nombre'] || 'amigo'
  "Hola, #{nombre}!"
end
