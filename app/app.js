const events = require('./events')
const store = require('./store')
const ui = require('./ui')

$(() => {
  console.log(JSON.parse(localStorage.getItem('user')))
  if (JSON.parse(localStorage.getItem('user')) !== null) {
    const user = JSON.parse(localStorage.getItem('user'))
    store.token = user.token
    store.userId = user._id
    ui.hideAndShow('#landing-page', '#home-page')
    events.onShowUserPost()
  } else {
    $('#home-page').hide()
  }

  events.onGetPost()

  $('#log-out-btn').on('click', events.onLogOut)
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#log-in-form').on('submit', events.onLogIn)
  $('#sign-up-username').keyup(events.onCheckUsername)
  $('#post-form').on('submit', events.onPostSubmit)
  // TEST
  $('#check-user').on('click', ui.checkUser)
})
