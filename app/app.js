const authEvents = require('./events')

$(() => {
  $('#home-page').hide()
  $('#sign-up-form').on('submit', authEvents.onSignUpSubmit)
  $('#log-in-form').on('submit', authEvents.onLogInSubmit)
})
