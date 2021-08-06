const authEvents = require('./events')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUpSubmit)
  $('#log-in-form').on('submit', authEvents.onLogInSubmit)
})
