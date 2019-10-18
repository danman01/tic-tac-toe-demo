const config = require('./config')
const store = require('./store')

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

// Game API functions

const updateGame = function (gameId, index, value, over) {
  const gameDelta = {
    'game': {
      'cell': {
        'index': index,
        'value': value
      },
      'over': over
    }
  }
  return $.ajax({
    url: `${config.apiUrl}/games/${gameId}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: gameDelta
  })
}

const createGame = function () {
  return $.ajax({
    url: `${config.apiUrl}/games`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

module.exports = {
  signUp,
  signIn,
  updateGame,
  createGame
}
