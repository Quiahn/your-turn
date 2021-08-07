const store = require('./store')

const hideAndShow = (hide, show) => {
  $(hide).hide()
  $(show).show()
}

const onSignUpSuccess = (res) => {
  console.log('Sign Up Complete!')
  $('#sign-up-modal-btn').trigger('click')
  $('form').trigger('reset')
}

const onSignUpFailure = () => {
  console.log('Sign Up Failed!')
  $('.error-msg').text('Sign Up Failed!')
  $('form').trigger('reset')
}

const onLogInSuccess = (res) => {
  // console.log(res.user.token)
  console.log('Log In Complete!')
  $('#log-in-modal-btn').trigger('click')
  $('form').trigger('reset')
  store.token = res.user.token
}

const onLogInFailure = () => {
  console.log('Log In Failed!')
  $('.error-msg').text('Log In Failed!')
  $('form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onLogInSuccess,
  onLogInFailure,
  hideAndShow
}
