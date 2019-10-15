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

module.exports = {
  signUp
}
