const onSignUpSuccess = () => {
  console.log('Sign Up Complete!')
  $('#sign-up-modal-btn').trigger('click')
  $('form').trigger('reset')
}

const onSignUpFailure = () => {
  console.log('Sign Up Failed!')
  $('.error-msg').text('Sign Up Failed!')
  $('form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure
}
