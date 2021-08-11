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
  store.user.token = res.user.token
  store.user._id = res.user._id
  $('#log-in-modal-btn').trigger('click')
  $('#signed-in-as').text(`Signed In As: ${res.user.username}`)
  hideAndShow('#landing-page', '#home-page')
  hideAndShow('.not-signed-in', '.signed-in')
}

const onLogInFailure = () => {
  console.log('Log In Failed!')
  $('#log-in-error-msg').text('Log In Failed!')
  $('form').trigger('reset')
}

const checkUser = () => {
  console.log(store.user._id)
  console.log(store.user.token)
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

const onSubmitPostSuccess = (res) => {
  console.log('Post Submit Completed!')
  console.log(res)
  $('form').trigger('reset')
  $('#post-submitted').show()
  setTimeout(() => $('#post-submitted').hide(), 3000)
}

const onSubmitPostFailure = () => {
  console.log('Post Submit Failed!')
}

const onGetPostSuccess = (res) => {
  const postArr = res.posts

  // eslint-disable-next-line space-before-function-paren
  function compare(a, b) {
    if (a.number < b.number) {
      return -1
    }
    if (a.number > b.number) {
      return 1
    }
    return 0
  }

  postArr.sort(compare)

  console.log('Get Post Completed!')
  console.log(postArr)
  postArr.forEach((post, i) => {
    if (i < 3) {
      $('#top-posts').append(`
      <div id="${post.owner.username}" class="row mx-auto my-3 border border-qPrimary rounded shadow-sm ${post.owner.username}-${i + 1}">

      <div class="col-3 border border-qPrimary rounded">
        <p class="mx-5 pt-2  d-flex h5 text-qDark">${post.owner.username}</p>
        <p class="mx-5 d-flex h6 text-qDarkSecondary">Rank: ${i + 1}</p>
        <p class="mx-5 pb-4 d-flex h6 text-qDarkSecondary">Number: ${post.number}</p>
      </div>

      <div class="col">
        <p class="h6 d-flex text-qDarkSecondary p-0 m-0">Post</p>
        <p class="text-black">${post.content}</p>
      </div>

    </div>
      `)

      $('#top-posts-landing').append(`
      <div id="${post.owner.username}-landing" class="row mx-auto landing border border-qPrimary rounded shadow-sm ${post.owner.username}-${i + 1}-landing">

      <div class="col-3 border border-qPrimary rounded">
        <p class="mx-5 pt-2  d-flex h5 text-qDark">${post.owner.username}</p>
        <p class="mx-5 d-flex h6 text-qDarkSecondary">Rank: ${i + 1}</p>
        <p class="mx-5 pb-4 d-flex h6 text-qDarkSecondary">Number: ${post.number}</p>
      </div>

      <div class="col">
        <p class="h6 d-flex text-qDarkSecondary p-0 m-0">Post</p>
        <p class="text-black">${post.content}</p>
      </div>

    </div>
      `)
    } else {
      $('#posts-div').append(`
      <div id="${post.owner.username}" class="row mx-auto my-3 border border-qPrimary rounded shadow-sm ${post.owner.username}-${i + 1}">

      <div class="col-3 border border-qPrimary rounded">
        <p class="mx-5 pt-2 d-flex h5 text-qDark">${post.owner.username}</p>
        <p class="mx-5 d-flex h6 text-qDarkSecondary">Rank: ${i + 1}</p>
        <p class="mx-5 pb-4 d-flex h6 text-qDarkSecondary">Number: ${post.number}</p>
      </div>

      <div class="col">
        <p class="h6 d-flex text-qDarkSecondary p-0 m-0">Post</p>
        <p class="text-black">${post.content}</p>
      </div>

    </div>
      `)
    }
  })
}

const onGetPostFailure = () => {
  console.log('Get Post Failed!')
  $('#error-msg').text('Get Post Failed!')
}

const onShowUserPostSuccess = (res) => {
  const postArr = res.posts
  console.log('Show User Post Completed!')
  console.log(postArr)
  if (postArr.length !== 0) {
    const post = postArr[0]
    store.postId = post._id
    $('#post-form').hide()
    $('#welcome-msg').text('Your Post')
    $(`#${post.owner.username}`).appendTo('#your-post')
    $('.options').show()
  } else {
    $('#post-form').show()
    $('#welcome-msg').text('You haven\'t posted yet')
    $('#edit-btn').hide()
    $('#delete-btn').hide()
  }
}

const onShowUserPostFailure = () => {
  console.log('Show User Post Failed!')
  $('#error-msg').text('Show User Post Failed!')
}

const onChangePasswordSuccess = () => {
  $('#change-password-error-msg').text('Password Changed!')
  $('form').trigger('reset')
  console.log('Password Change Complete!')
}

const onChangePasswordFailure = () => {
  console.log('Password Change Failed!')
  $('#change-password-error-msg').text('Password Change Failed!')
}

const onDeletePostSuccess = () => {
  $('#post-submitted').text('Post Deleted')
  $('#post-submitted').show()
  setTimeout(() => { $('#post-submitted').hide().text('Post Submitted') }, 3000)
}

const onDeletePostFailure = () => {
  console.log('Post Submit Failed!')
}

const onEditPostSuccess = () => {
  $()
  $('#post-submitted').text('Post Edited')
  $('#post-submitted').show()
  setTimeout(() => { $('#post-submitted').hide().text('Post Submitted') }, 3000)
  $('#edit-input').val('')
  $('.edit-form').hide()
}

const onEditPostFailure = () => {
  console.log('Post Edit Failed!')
  $('#edit-input').empty()
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
  onSubmitPostSuccess,
  onSubmitPostFailure,
  onGetPostSuccess,
  onGetPostFailure,
  onShowUserPostSuccess,
  onShowUserPostFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onDeletePostSuccess,
  onDeletePostFailure,
  onEditPostSuccess,
  onEditPostFailure
}
