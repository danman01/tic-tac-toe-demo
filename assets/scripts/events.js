const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// Submits credentials to API
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

module.exports = {
  onSignUp
}
