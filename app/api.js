const config = require('./config')
const store = require('./store')

const signUp = (data) => {
  // console.log('Signing Up!')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const logIn = (data) => {
  // console.log('Logging In!')
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const checkUsername = () => {
  // console.log('Checking Username!')
  return $.ajax({
    url: config.apiUrl + '/users',
    method: 'GET'
  })
}

const postSubmit = (postData) => {
  // console.log('Posting!')
  return $.ajax({
    url: config.apiUrl + '/posts',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: postData
  })
}

const getPost = () => {
  // console.log('Getting Posts!')
  return $.ajax({
    url: config.apiUrl + '/posts',
    method: 'GET'
  })
}

const showUserPost = () => {
  // console.log('Checking If The User Has A Post!')
  return $.ajax({
    url: config.apiUrl + '/posts/' + store.user._id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const changePassword = (passwordData) => {
  // console.log('Changing Password!')
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: passwordData
  })
}

const deletePost = () => {
  // console.log('Deleting Post!')
  return $.ajax({
    url: config.apiUrl + '/posts/' + store.postId,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const editPost = (postData) => {
  // console.log('Editing Post!')
  return $.ajax({
    url: config.apiUrl + '/posts/' + store.postId,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: postData
  })
}

module.exports = {
  signUp,
  logIn,
  checkUsername,
  postSubmit,
  getPost,
  showUserPost,
  changePassword,
  deletePost,
  editPost
}
