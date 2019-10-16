'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events')

// jQuery document.ready function
$(() => {
  // put code inside document ready
  // auth event listeners and handlers
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  // TODO: change password and sign out

  // game board event listeners and handlers
  $('.game-board td').on('click', events.clickSquare)
})
