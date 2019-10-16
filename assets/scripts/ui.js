const store = require('./store')

const signUpSuccess = function (response) {
  console.log('Success! response is', response)
  // clear the form
  $('#sign-up').trigger('reset')
  // give feedback to user
  $('#message').html("<span class='success'>Success</span>")
}

const signUpFailure = function (response) {
  console.log('Failure! response is', response)
  // clear the form
  $('#sign-up').trigger('reset')
  // give feedback to user
  $('#message').html("<span class='error'>Failure</span>")
}

const signInSuccess = function (response) {
  console.log('Success! response is', response)
  // clear the form
  $('#sign-in').trigger('reset')
  // give feedback to user
  $('#message').html("<span class='success'>Success</span>")
  // save token for future authenticated requests
  // { user: { token: save_this_token }}
  store.user = response.user
  console.log('store is now holding the user, which is', store.user)
  // store.user.token
}

const signInFailure = function (response) {
  console.log('Failure! response is', response)
  // clear the form
  $('#sign-in').trigger('reset')
  // give feedback to user
  $('#message').html("<span class='error'>Failure</span>")
}

// TODO: change password and sign out

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
