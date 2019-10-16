const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// Submits credentials to API to sign up
const onSignUp = function (event) {
  event.preventDefault()

  // get value of form inputs using getFormFields
  const credentials = getFormFields(event.target)
  console.log('credentials are', credentials)
  api.signUp(credentials)
    .then((response) => {
      console.log('sign up success within App')
      ui.signUpSuccess(response)
    })
    .catch(ui.signUpFailure)
}

// Submits credentials to API to sign in
const onSignIn = function (event) {
  event.preventDefault()

  // get value of form inputs using getFormFields
  const credentials = getFormFields(event.target)
  console.log('credentials are', credentials)
  api.signIn(credentials)
    .then((response) => {
      console.log('sign in success within App')
      ui.signInSuccess(response)
    })
    .catch(ui.signInFailure)
}

// TODO: change password and sign out

// game events

const clickSquare = function (event) {
  console.log('clicked square', event.target)
  // add X or O
  // figure out currentPlayer logic...
  // send update to Game api
  // tell user this was successful or a failure
}

module.exports = {
  onSignUp,
  onSignIn,
  clickSquare
}
