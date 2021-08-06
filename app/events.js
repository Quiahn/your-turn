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
}

const onLogInSubmit = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
}

module.exports = {
  onSignUpSubmit,
  onLogInSubmit
}
