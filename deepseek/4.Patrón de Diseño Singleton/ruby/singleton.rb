require 'sinatra'
require 'json'

get '/saludar' do
  nombre = params['nombre'] || 'Mundo'
  { mensaje: "Hola, #{nombre}" }.to_json
end