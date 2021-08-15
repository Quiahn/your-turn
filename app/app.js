const events = require('./events')
const store = require('./store')
const ui = require('./ui')

$(() => {
  // console.log(JSON.parse(localStorage.getItem('user')))
  if (JSON.parse(localStorage.getItem('user')) !== null) {
    const user = JSON.parse(localStorage.getItem('user'))
    store.user = user
    ui.hideAndShow('#landing-page', '#home-page')
    ui.hideAndShow('.not-signed-in', '.signed-in')
    events.onShowUserPost()
    $('#signed-in-as').text(`Signed In As: ${user.username}`)
  } else {
    ui.hideAndShow('#home-page', '#landing-page')
    ui.hideAndShow('.signed-in', '.not-signed-in')
  }

  events.onGetPost()

  $('.edit-form').hide()
  $('.options').hide()
  $('#post-submitted').hide()
  $('#edit-btn').on('click', () => $('.edit-form').show('slow'))
  $('#edit-cancel').on('click', () => $('.edit-form').hide('slow'))
  $('#edit-save').on('click', events.onEditPost)
  $('#delete-btn').on('click', events.onDeletePost)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('#log-out-btn').on('click', events.onLogOut)
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#log-in-form').on('submit', events.onLogIn)
  $('#sign-up-username').keyup(events.onCheckUsername)
  $('#post-form').on('submit', events.onSubmitPost)
})
