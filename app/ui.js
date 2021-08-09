const store = require('./store')

const hideAndShow = (hide, show) => {
  $(hide).hide()
  $(show).show()
}

const onSignUpSuccess = (res) => {
  $('.sign-up-error-msg').text('')
  console.log('Sign Up Complete!')
  $('#sign-up-modal-btn').trigger('click')
  $('form').trigger('reset')
  $('#log-in-modal-btn').trigger('click')
}

const onSignUpFailure = () => {
  console.log('Sign Up Failed!')
  $('.sign-up-error-msg').text('Sign Up Failed!')
  $('form').trigger('reset')
}

const onLogInSuccess = (res) => {
  $('.log-in-error-msg').text('')
  console.log('Log In Complete!')
  $('form').trigger('reset')
  localStorage.setItem('user', JSON.stringify(res.user))
  console.log(localStorage.getItem('user'))
  store.token = res.user.token
  store.userId = res.user._id
  $('#log-in-modal-btn').trigger('click')
  hideAndShow('#landing-page', '#home-page')
}

const onLogInFailure = () => {
  console.log('Log In Failed!')
  $('#log-in-error-msg').text('Log In Failed!')
  $('form').trigger('reset')
}

const checkUser = () => {
  console.log(store.userId)
  console.log(store.token)
  console.log(new Date().getDate())
}

const onCheckUsernameSuccess = (res) => {
  const username = $('#sign-up-username').val()
  const msg = $('#user-available')
  console.log(username)
  res.users.forEach(ele => {
    ele === username ? msg.text('Not Available') : msg.text('Pending')
  })
  if (msg.text() === 'Pending') {
    msg.text('Available')
    $('#sign-up-submit').prop('disabled', false)
  } else {
    $('#sign-up-submit').prop('disabled', true)
  }
}

const onCheckUsernameFailure = () => {
  console.log('Username Check Failed!')
  $('#log-in-error-msg').text('Username Check Failed!')
}

const onPostSubmitSuccess = (res) => {
  console.log('Post Submit Completed!')
  console.log(res)
}

const onPostSubmitFailure = () => {
  console.log('Post Submit Failed!')
}

const onGetPostSuccess = (res) => {
  console.log('Get Post Completed!')
  console.log(res)
}

const onGetPostFailure = () => {
  console.log('Get Post Failed!')
  $('#error-msg').text('Get Post Failed!')
}

const onShowUserPostSuccess = (res) => {
  console.log('Show User Post Completed!')
  console.log(res)
}

const onShowUserPostFailure = () => {
  console.log('Show User Post Failed!')
  $('#error-msg').text('Show User Post Failed!')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onLogInSuccess,
  onLogInFailure,
  onCheckUsernameSuccess,
  onCheckUsernameFailure,
  hideAndShow,
  checkUser,
  onPostSubmitSuccess,
  onPostSubmitFailure,
  onGetPostSuccess,
  onGetPostFailure,
  onShowUserPostSuccess,
  onShowUserPostFailure
}
