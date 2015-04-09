require 'bundler'
Bundler.require

get '/' do
  erb :main
end

get '/fahrenheit_to_kelvin' do
  erb :fahrenheit_to_kelvin
end

get '/fibonacci' do
  erb :fibonacci
end

get '/factorial' do
  erb :factorial
end