import React from 'react'
import Button from '../atoms/Button'
import InputLabelContainer from '../atoms/InputLabelContainer';
import GroupContainer from '../atoms/GroupContainer';

function ForgotPasswordSubmit({updateFormState}) {
  return (
    <>
      <InputLabelContainer>
        <label>Confirmation Code:</label>
        <input
          name='confirmationCode'
          placeholder='Confirmation code'
          onChange={e => { updateFormState(e)} }
        />
      </InputLabelContainer>
      <InputLabelContainer>
        <label>Password:</label>
        <input
          name='password'
          placeholder='New password'
          type='password'
          onChange={e => { updateFormState(e)} }
        />
      </InputLabelContainer>
      <GroupContainer>
        <Button type='submit'>Save new password</Button>
      </GroupContainer>
    </>
  )
}

export default ForgotPasswordSubmit