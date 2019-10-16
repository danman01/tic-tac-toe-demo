
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

module.exports = {
  signUpSuccess,
  signUpFailure
}
