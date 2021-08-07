const getFormFields = require('./../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUpSubmit = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)

  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
    .then(() => {
      api.logIn(data)
        .then(ui.onLogInSuccess)
        .then(ui.hideAndShow('#landing-page', '#home-page'))
        .catch(ui.onLogInFailure)
    })
}

const onLogInSubmit = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)

  api.logIn(data)
    .then(ui.onLogInSuccess)
    .then(ui.hideAndShow('#landing-page', '#home-page'))
    .catch(ui.onLogInFailure)
}

module.exports = {
  onSignUpSubmit,
  onLogInSubmit
}
