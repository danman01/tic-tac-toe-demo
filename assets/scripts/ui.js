
const signUpSuccess = function (response) {
  console.log('Success! response is', response)
  // clear the form
  // give feedback to user
}

const signUpFailure = function (response) {
  console.log('Failure! response is', response)
  // clear the form
  // give feedback to user
}

module.exports = {
  signUpSuccess,
  signUpFailure
}
