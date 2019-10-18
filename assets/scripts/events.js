const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

// game defaults
let currentPlayer = 'X'
const over = false
console.log('file loaded...currentPlayer is', currentPlayer)

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
const onCreateGame = function (event) {
  event.preventDefault()

  // send createGame api call
  api.createGame()
    .then((response) => {
      // TODO move this in UI file, and give user feedback
      store.game = response.game
    })
    .catch(console.error)
  // TODO store gameId so I can use in update function
}

const clickSquare = function (event) {
  console.log('clicked square', event.target)
  if ($(event.target).attr('data-square-clicked') !== 'true') {
    // if square hasn't been clicked...
    $(event.target).attr('data-square-clicked', 'true')

    console.log('square clicked. data-square-clicked is', $(event.target).attr('data-square-clicked'))
    // add X or O:
    $(event.target).text(currentPlayer)

    // setup arguments for API call
    const index = $(event.target).attr('id')
    const gameId = store.game.id

    // - update the api
    // api wants PATCH
    // with data: currentPlayer, index, gameId
    // arguments:
    //  - gameId is id of current game
    //  - index is 0-8 of game board
    //  - currentPlayer is X or O
    //  - over is true or false
    api.updateGame(gameId, index, currentPlayer, over)
      .then(console.log)
      .catch(console.error)

    const nextPlayer = currentPlayer === 'X' ? 'O' : 'X'
    currentPlayer = nextPlayer
    console.log('in clickSquare...currentPlayer is', currentPlayer)
    // tell user this was successful or a failure
    ui.clickSquareSuccess(nextPlayer)

    // TODO is game over? set over to true
  } else {
    console.log('square could not be clicked')
    // on failure:
    // - give user failure feedback
    ui.clickSquareFailure()
  }
}

module.exports = {
  onSignUp,
  onSignIn,
  clickSquare,
  onCreateGame
}
