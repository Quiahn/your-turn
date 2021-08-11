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

  setTimeout(onGetPost, 1000)
  setTimeout(onShowUserPost, 1000)
}

const onLogOut = () => {
  ui.hideAndShow('#home-page', '#landing-page')
  ui.hideAndShow('.signed-in', '.not-signed-in')
  $('form').trigger('reset')
  localStorage.setItem('user', null)
  store.user.token = ''
  store.user._id = ''
  $('#your-post').empty()
  $('#posts-div').empty()
  $('#top-posts').empty()
}

const onCheckUsername = () => {
  api.checkUsername()
    .then(ui.onCheckUsernameSuccess)
    .catch(ui.onCheckUsernameFailure)
}

const onSubmitPost = (event) => {
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
    .then(ui.onSubmitPostSuccess)
    .then(() => { $('#your-post').empty(); $('#posts-div').empty(); $('#top-posts').empty() })
    .then(setTimeout(() => onGetPost(), 1000))
    .then(setTimeout(() => onShowUserPost(), 1000))
    .catch(ui.onSubmitPostFailure)
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

const onChangePassword = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)

  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onDeletePost = () => {
  api.deletePost()
    .then(ui.onDeletePostSuccess)
    .then(() => { $('#your-post').empty(); $('#posts-div').empty(); $('#top-posts').empty() })
    .then(setTimeout(() => onGetPost(), 1000))
    .then(setTimeout(() => onShowUserPost(), 1000))
    .catch(ui.onDeletePostFailure)
}

const onEditPost = () => {
  const postData = {
    post: {
      content: $('#edit-input').val()
    }
  }
  api.editPost(postData)
    .then(ui.onEditPostSuccess)
    .then(() => { $('#your-post').empty(); $('#posts-div').empty(); $('#top-posts').empty() })
    .then(setTimeout(() => onGetPost(), 1000))
    .then(setTimeout(() => onShowUserPost(), 1000))
    .catch(ui.onEditPostFailure)
}

module.exports = {
  onSignUp,
  onLogIn,
  onCheckUsername,
  onSubmitPost,
  onLogOut,
  onGetPost,
  onShowUserPost,
  onChangePassword,
  onDeletePost,
  onEditPost
}
