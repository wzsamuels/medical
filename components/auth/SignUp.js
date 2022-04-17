import React from 'react'
import Button from '../atoms/Button'
import InputLabelContainer from '../atoms/InputLabelContainer';
import GroupContainer from '../atoms/GroupContainer';

function SignUp({ updateFormState }) {

  return (
    <>
      <InputLabelContainer>
        <label>Email:</label>
        <input
          name='username'
          onChange={e => updateFormState(e)}
          placeholder='email'
        />
      </InputLabelContainer>
      <InputLabelContainer>
        <label>Password:</label>
        <input
          type='password'
          name='password'
          onChange={e => updateFormState(e)}
          placeholder='password'
        />
      </InputLabelContainer>
      <GroupContainer>
        <Button type='submit'>Sign Up</Button>
      </GroupContainer>
    </>
  )
}

export default SignUp