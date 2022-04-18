import styled from "styled-components";
import SignIn from "./SignIn";
import React, {useState} from "react";
import {H2} from "../atoms/Typography";
import Form from "../atoms/Form";
import SignUp from "./SignUp";
import ConfirmSignUp from "./ConfirmSignUp";
import ForgotPassword from "./ForgotPassword";
import {confirmSignUp, forgotPassword, forgotPasswordSubmit, signIn, signUp} from './auth';
import ForgotPasswordSubmit from './ForgotPasswordSubmit';
import {useRouter} from 'next/router';

const AuthNav = styled.div`
  font-weight: 600;
  padding: 0 25px;
  margin-top: 15px;
  margin-bottom: 0;
  text-align: center;
  
  & span {
    color: #006bfc;
    cursor: pointer
  }
`

const styles = {
  toggleForm: {
    fontWeight: '600',
    padding: '0px 25px',
    marginTop: '15px',
    marginBottom: 0,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.6)'
  },
  resetPassword: {
    marginTop: '5px',
  },
  anchor: {
    color: '#006bfc',
    cursor: 'pointer'
  }
}

const initialFormState = {
  username: '', password: '', confirmationCode: ''
}

const AuthForm = ({route}) => {
  const [formType, setFormType] = useState('signIn')
  const [formState, updateFormState] = useState(initialFormState)
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)
  const router = useRouter()

  const updateFormType = newFormType => {
    setError(null)
    setMessage(null)
    setFormType(newFormType)
    //console.log(formState)
  }

  function updateForm(event) {
    const newFormState = {
      ...formState, [event.target.name]: event.target.value
    }
    updateFormState(newFormState)
  }

  const handleSubmit = (callback, event) => {
    event.preventDefault()
    try {
      callback()
    } catch(err) {
      setError(err.message)
    }
  }

  function renderForm() {
    switch(formType) {
      case 'signUp':
        return (
          <Form
            method='POST'
            onSubmit={e => handleSubmit(() => signUp(formState, setMessage, setError, updateFormType), e)}
          >
            <H2 style={{textAlign:'center'}}>Sign Up</H2>
            <SignUp
              formState={formState}
              updateFormState={e => updateForm(e)}
            />
          </Form>
        )
      case 'confirmSignUp':
        return (
          <Form
            method='POST'
            onSubmit={e => handleSubmit(() => confirmSignUp(formState, setMessage, setError, updateFormType), e)}
          >
            <H2 style={{textAlign:'center'}}>Confirm Sign Up</H2>
            <ConfirmSignUp
              updateFormState={e => updateForm(e)}
              formState={formState}
            />
          </Form>
        )
      case 'signIn':
        return (
          <Form
            method='POST'
            onSubmit={e => handleSubmit(() => signIn(formState, setMessage,  setError, () => router.push(route)), e)}
          >
            <H2 style={{textAlign:'center'}}>Sign In</H2>
            <SignIn
              updateFormState={e => updateForm(e)}
              formState={formState}
              disabled={!(formState.username && formState.password)}
            />
          </Form>
        )
      case 'forgotPassword':
        return (
          <Form
            method='POST'
            onSubmit={e => handleSubmit(() => forgotPassword(formState, setMessage, setError, updateFormType), e)}
          >
            <H2 style={{textAlign:'center'}}>Password Recovery</H2>
            <ForgotPassword
              updateFormState={e => updateForm(e)}
            />
          </Form>
        )
      case 'forgotPasswordSubmit':
        return (
          <Form
            method='POST'
            onSubmit={e => handleSubmit(() => forgotPasswordSubmit(formState, setMessage, setError, updateFormType), e)}
          >
            <H2 style={{textAlign:'center'}}>Password Recovery Submit</H2>
            <ForgotPasswordSubmit
              updateFormState={e => updateForm(e)}
            />
          </Form>
        )
      default:
        return null
    }
  }

  return (
    <>
        {renderForm()}
        { formType === 'signUp' &&
          <AuthNav>
            <p>
              Already have an account? <span
              onClick={() => updateFormType('signIn')}
            >Sign In</span>
            </p>
          </AuthNav>
        }
        {
          formType === 'signIn' && (
            <AuthNav>
              <p>
                Need an account? <span
                onClick={() => updateFormType('signUp')}
              >Sign Up</span>
              </p>
              <p style={styles.resetPassword}>
                Forget your password? <span
                onClick={() => updateFormType('forgotPassword')}
              >Reset Password</span>
              </p>
            </AuthNav>
          )
        }
        {
          formType === 'confirmSignUp' && (
            <AuthNav>
              <p>
                Already confirmed your account? <span
                onClick={() => updateFormType('signIn')}
              >Sign In</span>
              </p>
            </AuthNav>
          )
        }
        { error &&
          <p style={{textAlign: 'center', color: 'white', fontWeight: 700, backgroundColor: 'darkRed', padding: '1em'}}>
            {error}
          </p>
        }
        { message &&
          <>
            <p style={{textAlign: 'center', color: 'white', fontWeight: 700, backgroundColor: 'darkgreen', padding: '1em'}}>
              {message}
            </p>
            {/*<FadeSpinner/>*/}
          </>
        }
    </>
  )
}



export { styles, AuthForm as default }