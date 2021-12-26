import Route from '@ioc:Adonis/Core/Route'

Route.post('users/register', 'Users/Register.store')
Route.get('users/register/:key', 'Users/Register.show')
Route.put('users/register', 'Users/Register.update')

Route.post('users/forgotpassword', 'Users/ForgotPassword.store')
Route.get('users/forgotpassword/:key', 'Users/ForgotPassword.show')
Route.put('users/forgotpassword', 'Users/ForgotPassword.update')

Route.get('users', 'Users/Main.show').middleware('auth')
Route.put('users', 'Users/Main.update').middleware('auth')

Route.put('users/avatar', 'Users/Avatar.update').middleware('auth')
Route.delete('users/avatar', 'Users/Avatar.destroy').middleware('auth')

Route.get('users/search', 'Users/Search.index').middleware('auth')
