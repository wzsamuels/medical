import Auth from '@aws-amplify/auth';

async function checkAuthState() {
  try {
    return await Auth.currentAuthenticatedUser()
  } catch (err) {
    return false
  }
}

async function signUp({username, password}, setMessage, setError, updateFormType) {
  try {
    await Auth.signUp({
      username, password
    })
    console.log('sign up success!')
    updateFormType('confirmSignUp')
  } catch (err) {
    console.log(`${username}`)
    console.log('error signing up..', err)
    setError(err.message)
  }
}

async function confirmSignUp({ username, confirmationCode }, setMessage, setError, updateFormType) {
  try {
    await Auth.confirmSignUp(username, confirmationCode)
    updateFormType('signIn')
  } catch (err) {
    console.log('error signing up..', err)
    setError(err.message)
  }
}

async function signIn({ username, password }, setMessage, setError, onSignIn) {

  try {
    const user = await Auth.signIn(username, password)
    //const userInfo = { username: user.username, ...user.attributes }
    onSignIn(user)
  } catch (err) {
    console.log(`Error signing in: ${err.message}`)
    setError(err.message)
  }
}

async function forgotPassword({ username }, setMessage, setError, updateFormType) {
  try {
    await Auth.forgotPassword(username)
    updateFormType('forgotPasswordSubmit')
    setMessage(`An email has been sent to ${username} with a password reset confirmation code.`)
  } catch (err) {
    console.log('error submitting username to reset password...', err)
    setError(err.message)
  }
}

async function forgotPasswordSubmit({ username, confirmationCode, password }, setMessage, setError, updateFormType) {
  try {
    await Auth.forgotPasswordSubmit(username, confirmationCode, password)
    updateFormType('signIn')
  } catch (err) {
    console.log('error updating password... :', err)
    setError(err.message)
  }
}

async function signOut() {
  try {
    await Auth.signOut()
  } catch(error) {
    console.log('Error signing out:', error)
  }
}

export {signIn, signUp, signOut, confirmSignUp, forgotPasswordSubmit, forgotPassword, checkAuthState}