const config = require('./config')

// AJAX call to signUp endpoint on server
const signUp = function (credentials) {
  console.log('apiUrl is ', config.apiUrl)
  console.log('credentials in signUp ', credentials)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: credentials
  })
}

// AJAX call to signIn endpoint on server
const signIn = function (credentials) {
  console.log('apiUrl is ', config.apiUrl)
  console.log('credentials in signIn ', credentials)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: credentials
  })
}

// TODO: change password and sign out

module.exports = {
  signUp,
  signIn
}
