import Auth from '@aws-amplify/auth';

async function checkAuthState() {
  try {
    return await Auth.currentAuthenticatedUser()
  } catch (err) {
    return false
  }
}

async function signUp({ username, password, email }, updateFormType) {
  try {
    await Auth.signUp({
      username, password//, attributes: { email }
    })
    console.log('sign up success!')
    updateFormType('confirmSignUp')
  } catch (err) {
    console.log('error signing up..', err)
    throw new Error(err.message)
  }
}

async function confirmSignUp({ username, confirmationCode }, updateFormType) {
  try {
    await Auth.confirmSignUp(username, confirmationCode)
    updateFormType('signIn')
  } catch (err) {
    console.log('error signing up..', err)
    throw new Error(err.message)
  }
}

async function signIn({ username, password }, onSignIn) {

  try {
    console.log(`${username} ${password}`)
    const user = await Auth.signIn(username, password)
    //const userInfo = { username: user.username, ...user.attributes }
    //onSignIn(user)
  } catch (err) {
    console.log(`Error signing in: ${err.message}`)
    throw new Error(err.message)
  }
}

async function forgotPassword({ username }, updateFormType) {
  try {
    await Auth.forgotPassword(username)
    updateFormType('forgotPasswordSubmit')
  } catch (err) {
    console.log('error submitting username to reset password...', err)
    throw new Error(err.message)
  }
}

async function forgotPasswordSubmit({ username, confirmationCode, password }, updateFormType) {
  try {
    await Auth.forgotPasswordSubmit(username, confirmationCode, password)
    updateFormType('signIn')
  } catch (err) {
    console.log('error updating password... :', err)
    throw new Error(err.message)
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