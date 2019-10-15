'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')

// jQuery document.ready function
$(() => {
  // put code inside document ready
  $('#sign-up').on('submit', onSignUp)
})

// Submits credentials to API
const onSignUp = function (event) {
  event.preventDefault()

  // get value of form inputs using getFormFields
  const credentials = getFormFields(event.target)
  console.log('credentials are', credentials)
  api.signUp(credentials)
    .then(console.log)
    .catch(console.error)
}
