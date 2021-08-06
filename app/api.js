const store = require('./store')
const config = require('./config')

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
    url: config.apiUrl + '/log-in',
    method: 'POST',
    data: data
  })
}

const logOut = (data) => {
  console.log('Signing Up!')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

module.exports = {
  signUp,
  logIn,
  logOut
}
