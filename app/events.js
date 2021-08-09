const getFormFields = require('./../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

const onSignUp = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)

  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onLogIn = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)

  api.logIn(data)
    .then(ui.onLogInSuccess)
    .catch(ui.onLogInFailure)

  setTimeout(onShowUserPost, 1000)
}

const onLogOut = () => {
  ui.hideAndShow('#home-page', '#landing-page')
  $('form').trigger('reset')
  localStorage.setItem('user', null)
  store.token = ''
  store.userId = ''
}

const onCheckUsername = () => {
  api.checkUsername()
    .then(ui.onCheckUsernameSuccess)
    .catch(ui.onCheckUsernameFailure)
}

const onPostSubmit = (event) => {
  event.preventDefault()

  const randomNum = Math.ceil(Math.random() * 1000)
  $('#draw-number').text(randomNum)

  const postData = {
    post: {
      content: $('#post-input').val(),
      number: randomNum
    }
  }

  api.postSubmit(postData)
    .then(ui.onPostSubmitSuccess)
    .catch(ui.onPostSubmitFailure)
}

const onGetPost = () => {
  api.getPost()
    .then(ui.onGetPostSuccess)
    .catch(ui.onGetPostFailure)
}

const onShowUserPost = () => {
  api.showUserPost()
    .then(ui.onShowUserPostSuccess)
    .catch(ui.onShowUserPostFailure)
}

module.exports = {
  onSignUp,
  onLogIn,
  onCheckUsername,
  onPostSubmit,
  onLogOut,
  onGetPost,
  onShowUserPost
}
