const config = require('./config')
const store = require('./store')

const signUp = (data) => {
  console.log('Signing Up!')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const logIn = (data) => {
  console.log('Logging In!')
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const checkUsername = () => {
  console.log('Checking Username!')
  return $.ajax({
    url: config.apiUrl + '/users',
    method: 'GET'
  })
}

const postSubmit = (postData) => {
  console.log('Posting!')
  return $.ajax({
    url: config.apiUrl + '/posts',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.token
    },
    data: postData
  })
}

const getPost = () => {
  console.log('Getting Posts!')
  return $.ajax({
    url: config.apiUrl + '/posts',
    method: 'GET'
  })
}

const showUserPost = () => {
  console.log('Checking If The User Has A Post!')
  return $.ajax({
    url: config.apiUrl + '/posts/' + store.userId,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}

module.exports = {
  signUp,
  logIn,
  checkUsername,
  postSubmit,
  getPost,
  showUserPost
}
